(function () {
  let DB;

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();
  });

  // Crea la base de datos de indexDB
  function crearDB() {
    const crearDB = window.indexedDB.open("crm", 1);

    crearDB.onerror = () => {
      console.log("Hubo un error");
    };

    crearDB.onsuccess = () => {
      DB = crearDB.result;
    };

    crearDB.onupgradeneeded = (e) => {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
        keypath: "id",
        autoIncrement: true,
      });

      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("DB lista y creada");
    };
  }
})();
