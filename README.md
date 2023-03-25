# IF3260_Tugas2_K02_G17

## Deskripsi

Website yang dapat menerima inputan hollow objek 3D dan menampilkannya menggunakan WebGL. Pada website ini, terdapat beberapa controller untuk memodifikasi objek maupun tampilan objek, seperti mengubah proyeksi, translasi, rotasi, scaling, shading, dan pengubahan kamera.

## Prerequisites

- Browser that support WebGL

## How to run

1. Clone repository
2. Buka file index.html yang terdapat pada folder src menggunakan web browser yang support WebGL.

## Fitur

Website ini menyediakan fitur sebagai berikut.

1. Load 3D object <br>
   Fitur ini digunakan untuk mengimport suatu object 3D pada canvas.
   Konfigurasi dari file adalah JSON file yang berisikan `vertices`, `indices`, dan `color`. Terdapat 3 hollow objek yang kami jadikan contoh yang dapat ditemukan pada folder `test`, yaitu:

   - Prisma (Suryanto 13520059)
   - Tesseract (Ghebyon Tohada Nainggolan 13520059 )
   - Octahedron (Monica Adelia 13520096)
     <br>

2. Shading <br>
   Terdapat tombol on/off untuk mengaktifkan atau mematikan fitur shading.
   <br>
3. Projection <br>
   Proyeksi yang terdapat pada website ini adalah orthographic, oblique, dan perspective.
   <br>
4. Translation <br>
   Terdapat slider untuk melakukan translasi sumbu x, y, dan z
   <br>
5. Rotation <br>
   Terdapat slider untuk melakukan sumbu x, y, dan z
   <br>
6. Scale <br>
   Terdapat slider untuk melakukan scaling sumbu x, y, dan z
   <br>
7. Camera <br>
   Menggunakan slider untuk mengubah angle atau radius kamera dengan objek
   <br>
8. Reset to default view <br>
   Mengembalikan objek ke tampilan semula
   <br>
9. Help <br>
   Panduan dalam menjalankan website
   <br>
10. Animation (Fitur bonus) <br>
   Dengan mengklik fitur ini, object akan secara otomatis berotasi pada sumbu x.
   <br>
11. Save Model (Fitur bonus) <br>
   Dengan mengklik fitur ini, website akan menyimpan model yang sedang ada di canvas.
   <br>


## Authors

| Nama                      |   NIM    |
| ------------------------- | :------: |
| Ghebyon Tohada Nainggolan | 13520079 |
| Suryanto                  | 13520059 |
| Monica Adelia             | 13520096 |
