import React, { useEffect, useRef, useState } from 'react';

const PoseVerifier = () => {
  const URL = import.meta.env.VITE_MODEL_URL;
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isClassifying, setIsClassifying] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    loadModel();
    return () => {
      stopWebcam();
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    if (isClassifying && model && videoRef.current) {
      const classify = async () => {
        const prediction = await model.predict(videoRef.current);
        console.log('Prediction:', prediction);
        setPrediction(prediction);

        if (isClassifying) {
          animationFrameId = requestAnimationFrame(classify);
        }
      };
      classify();
    }
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isClassifying, model]);

  const loadModel = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
      // Ensure tmImage is available globally
      if (typeof window.tmImage === 'undefined') {
        throw new Error('tmImage is not defined. Make sure the script is loaded.');
      }
      const loadedModel = await window.tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
      setIsLoading(false);
      console.log("Model loaded successfully");
    } catch (error) {
      console.error("Failed to load model:", error);
      setIsLoading(false);
    }
  };

  const startWebcam = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setIsClassifying(true);
          console.log("Webcam started");
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsClassifying(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }} className='overflow-hidden'>
      <h1 className='text-black bg-white border-2 text-2xl font-semibold sm:max-w-96  sm:ml-[550px] sm:mb-10'>Pose Verifier</h1>
      {isLoading ? (
        <p>Loading model...</p>
      ) : (
        <>
          <div style={{ position: 'relative', width: '640px', height: '480px', margin: '0 auto' }}>
            <video
              ref={videoRef}
              style={{ position: 'absolute', width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={startWebcam} disabled={isClassifying} className='border-2 rounded-lg bg-white text-black font-semibold text-2xl p-2 sm:mx-5 mx-5 cursor-pointer'>Start</button>
            <button onClick={stopWebcam} disabled={!isClassifying} className='border-2 rounded-lg bg-white text-black font-semibold text-2xl p-2 sm:mx-5 mx-5 cursor-pointer'>Stop</button>
          </div>
          {prediction && (
            <div style={{ marginTop: '20px' }}>
              <h3>Prediction:</h3>
              {prediction.map((p, i) => (
                <p key={i}>{`${p.className}: ${(p.probability * 100).toFixed(2)}%`}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PoseVerifier;