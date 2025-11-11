const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ✅ Menyajikan folder public sebagai file statis
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Route utama untuk menampilkan index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (Opsional) jika nanti kamu ingin menambahkan API endpoint
// app.post('/api/save-key', (req, res) => {
//   // tambahkan logika penyimpanan
//   res.json({ message: "Key received!" });
// });

app.listen(port, () => {
  console.log(`✅ Server berjalan di http://localhost:${port}`);
});
