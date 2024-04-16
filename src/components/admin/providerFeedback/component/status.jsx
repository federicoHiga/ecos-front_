export default function StatusProvider({ status }) {
  if (status === "ACEPTADO") {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#1D9129" />
        </svg>
        <h1>Aceptado</h1>
      </div>
    );
  }
  if (status === "REQUIERE_CAMBIOS") {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#B86B11" />
        </svg>
        <h1>En revisión</h1>
      </div>
    );
  }
  if (status === "DENEGADO") {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#BC1111" />
        </svg>

        <h1>Denegado</h1>
      </div>
    );
  }
}
