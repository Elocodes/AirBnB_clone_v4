// script Listens for changes on each input checkbox tag:
// if the checkbox is checked, it stores the Amenity ID in a variable (dictionary)
// if the checkbox is unchecked, it removes the Amenity ID from the variable
// update the h4 tag inside the div Amenities with the list of Amenities checked

const amenitiesHub = () => {
  const name = this.attr('data-name');
  const id = this.attr('data-id');
  const selected = {}

  $('input:checkbox').change(() => {
    if (this.checked) {
      selected[id] = name;
    } else {
      delete selected['data-id'];
    }
  });
  selectedAmenities = object.values(selected).join(',');
  $('.amenities h4').text(selectedAmenities);
};
$(document).ready(amenitiesHub);
