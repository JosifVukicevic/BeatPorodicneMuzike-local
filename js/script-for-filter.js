/*
document.addEventListener('DOMContentLoaded', function () {
    var filterSelect = document.getElementById('filter-select');
    var imageBoxes = document.querySelectorAll('.image-box');

    filterSelect.addEventListener('change', function () {
        var selectedFilter = filterSelect.value;

        imageBoxes.forEach(function (box) {
            var imageCategory = box.getAttribute('data-category');
            var shouldDisplay = selectedFilter === 'all' || imageCategory === selectedFilter;

            box.style.display = shouldDisplay ? 'block' : 'none';
        });
    });
});
*/

  document.addEventListener('DOMContentLoaded', function () {
    var filterSelect = document.getElementById('filter-select');
    var imageBoxes = document.querySelectorAll('.image-box');
    var resultCountElement = document.getElementById('result-count');

    filterSelect.addEventListener('change', function () {
      var selectedFilter = filterSelect.value;
      var matchingImages = [];

      imageBoxes.forEach(function (box) {
        var imageCategory = box.getAttribute('data-category');
        if (selectedFilter === 'all' || imageCategory === selectedFilter) {
          matchingImages.push(box);
        }
      });

      // Prikazi broj rezultata ispod filtera
      resultCountElement.textContent = matchingImages.length + ' rezultata';

      // Prikazi ili sakrij slike prema odabranoj kategoriji
      imageBoxes.forEach(function (box) {
        var shouldDisplay = selectedFilter === 'all' || box.getAttribute('data-category') === selectedFilter;
        box.style.display = shouldDisplay ? 'block' : 'none';
      });
    });
  });