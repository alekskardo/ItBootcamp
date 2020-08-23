function obrisiStavku(e) {
    e.target.parentElement.remove();
  }

  function procenatSume(sumaRas, sumaPri) {
    if (sumaPri > 0) {
      return Math.ceil((sumaRas / sumaPri) * 100) + "%";
    }
  }
  function procenat(x, sumaPri) {
    if (sumaPri > 0) {
      return Math.ceil((x / sumaPri) * 100) + "%";
    }
  }

  export{ obrisiStavku, procenatSume,procenat  }