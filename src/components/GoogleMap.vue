<template>
  <div>
    <!-- <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/> -->
    <gmap-map
    :center="center"
    :zoom="15"
    style="width:100%;  height: 400px;"
    >
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div v-html="infoContent"></div>
      </gmap-info-window>
      <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="toggleInfoWindow(m,i)"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 25.091447, lng: 121.447331 },
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [
        {
          position: {
            lat: 25.091447,
            lng: 121.447331
          },
          infoContent: `
          <div class="headline">
            <div class="ct-icon">
              <i class="fas fa-warehouse"></i>
            </div>
            <p class="ct-text">Vergil's Workshop.</p>
          </div>
          `
        }
      ]
    }
  },
  mounted() {
    // this.geolocate();
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = marker.infoContent;

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;

        }
    }
  }
};
</script>