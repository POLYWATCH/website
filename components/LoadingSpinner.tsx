import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Incrementa progresso ogni 500ms
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 500);

    // Simula il completamento del caricamento dopo 5 secondi
    setTimeout(() => {
      setLoading(false);
      clearInterval(timer);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Altezza a schermo intero
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#000", // Sfondo nero
        zIndex: 9999,
      }}
    >
      <div style={{ textAlign: "center", color: "#fff" }}>
        <CircularProgress
          color="secondary"
          size={80}
          variant="indeterminate"
          thickness={2} // Spessore dello spinner
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h6"
          gutterBottom
          style={{
            fontFamily: "Minecraft",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textShadow: "0 0 5px #fff", // Effetto bordo
            animation: "tremble 0.1s infinite", // Effetto tremolio
          }}
        >
          Loading Polywatch Ecosystem
        </Typography>
        <Typography variant="body1" style={{ color: "#fff" }}>
          {`${progress}%`}
        </Typography>
      </div>
    </div>
  );
};

export default LoadingSpinner;
