function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

  function copyNumber() {
    const number = '+250788302344';
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard: " + number);
  }