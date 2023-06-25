function hitungCicilan() {
  var harga = parseInt(document.getElementById("harga").value);
  var dp = parseInt(document.getElementById("dp").value);
  var cicilan = parseInt(document.getElementById("cicilan").value);
  var tahun = parseInt(document.getElementById("tahun").value);
  var bulan = 11;

  var rasio = [10, 15, 20, 25, 30];
  var interest = [];
  var pv = [];
  var pvTotal = [];
  var npv = [];

  for (var a = 0; a < tahun; a++) {
    interest[a] = rasio[a] / 100 / (bulan + 1);
  }

  for (var a = 0; a < tahun; a++) {
    pv[a] = [];
    pvTotal[a] = 0;
    for (var b = 0; b < bulan; b++) {
      pv[a][b] = cicilan / Math.pow(1 + interest[a], b + 1);
      pvTotal[a] += pv[a][b];
    }
  }

  for (var a = 0; a < tahun; a++) {
    npv[a] = pvTotal[a] - (harga - dp);
  }

  var npvResult = "";
  for (var a = 0; a < tahun; a++) {
    npvResult +=
      "NPV " +
      rasio[a] +
      "% = " +
      Math.round(npv[a]).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      }) +
      "<br>";
  }

  var interestResult = "";
  for (var a = 0; a < tahun; a++) {
    interestResult +=
      "Interest " + rasio[a] + "% = " + interest[a].toFixed(5) + "<br>";
  }

  var hasil = document.getElementById("hasil");
  hasil.innerHTML =
    "<h2>Hasil Perhitungan</h2>" + npvResult + "<br>" + interestResult;

  // Memanggil fungsi hitungIRR() di komen belum ke pakai
  //   hitungIRR(npv);
}

function hasilPerhitungan() {
  var cicilan = parseInt(document.getElementById("cicilan").value);
  var tahun = parseInt(document.getElementById("tahun").value);
  var bulan = 11;

  var rasio = [10, 15, 20, 25, 30];
  var interest = [];
  var pv = [];
  var pvTotal = [];

  for (var a = 0; a < tahun; a++) {
    interest[a] = rasio[a] / 100 / (bulan + 1);
  }

  for (var a = 0; a < tahun; a++) {
    pv[a] = [];
    pvTotal[a] = [];
    for (var b = 0; b < bulan; b++) {
      pv[a][b] = cicilan / Math.pow(1 + interest[a], b + 1);
      pvTotal[a][b] = pv[a][b];
    }
  }

  localStorage.setItem("hasilPerhitungan", JSON.stringify(pvTotal));

  window.location.href = "hasil.html";
}

// function hitungIRR(cashFlows) {
//   var minValue = -100.0;
//   var maxValue = 100.0;
//   var guess = 0.0;
//   var iteration = 0;

//   while (Math.abs(minValue - maxValue) > 0.0001 && iteration < 1000) {
//     var npv = 0.0;
//     var npvGuess = 0.0;
//     for (var i = 0; i < cashFlows.length; i++) {
//       npv += cashFlows[i] / Math.pow(1 + guess / 100, i + 1);
//       npvGuess += cashFlows[i] / Math.pow(1 + (guess + 0.01) / 100, i + 1);
//     }

//     if (npv * npvGuess < 0) {
//       maxValue = guess;
//       guess = (guess + minValue) / 2;
//     } else if (npv * npvGuess > 0) {
//       minValue = guess;
//       guess = (guess + maxValue) / 2;
//     } else {
//       break;
//     }

//     iteration++;
//   }

//   //   var hasilIRR = document.getElementById("hasil-irr");
//   //   hasilIRR.innerHTML = "IRR: " + guess.toFixed(2) + "%";
// }
