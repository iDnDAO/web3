const BTFS_HASH = "QmXyzABC123456...";  // reemplaza con tu hash real

fetch(`https://dweb.link/ipfs/${BTFS_HASH}`)
  .then(response => response.json())
  .then(data => {
    document.getElementById("btfs-content").innerHTML = `
      <h2>Domain Info:</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
  })
  .catch(err => {
    document.getElementById("btfs-content").textContent = "Failed to load BTFS content.";
  });
