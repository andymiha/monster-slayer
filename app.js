const app = Vue.createApp({
  /* Make sure data and computed props don't have same name (name clash) */
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '' (to avoid name clash)
    };
  },

  /* ------------------------------------------------------------- */
  /* WATCHER is deprecated -- new vue calls it WATCH */

  /* not used in the template */
  /* run any code in reaction to changes */
  /* use for non-data updates (behind the scenes work) */

  /* when you want to execute code because something changed */
  /* a function that executes when one of it's dependencies change */
  /* not called in the html -- happens automatically (so no return value) */
  /* we define methods in the watchers as the same name as their main dependencies */
  watch: {
    /* we could also use a second prop for the oldValue -- name(newVal, oldVal) */
    /*     
    name(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        // this.fullname = this.name + ' ' + this.lastName;
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    } 
    */
    /* the code with the names work but computed does this with much less code... */

    /* the type of task where a watcher shines is more as follows */
    /* reset timers if certain things change */
    /* send HTTP requests if data changes */
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          /* 'this' inside this anonym func won't refer to the same 'this' as outside the func */
          /* this.counter = 0; */
          that.counter = 0;
        }, 2000)
        this.counter = 0;
      }

    }
  },
  /* ------------------------------------------------------------- */
  /* use with data binding */
  /* props are re-evaluated when their used values change */
  /* use for data that depends on other data */

  /* computed props are like methods but they are cached and only reloaded when required */
  /* we name them like data variables because we never call them, we only point to them */
  /* computed props are used when you want to recalculate a value when dependencies change */
  /* you DON'T bind events to computed props */

  /* when you want to compute values dynamically */
  computed: {
    fullname() {
      console.log('Running computed property')
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      /* return this.name + ' ' + 'Mihaescu'; */
      /* If we want to use 2 dependencies, just reference 2 deps ! */
      /* Behaves the same way as watchers */
      return this.name + ' ' + this.lastName;
    }
  },

  /* ------------------------------------------------------------- */
  /* use with event or data binding */
  /* data binding: method re-executed every re-render cycle */
  /* use for event/data that needs to re-evaluated all the time */

  /* methods are not cached, they are reloaded every time the page is re-rendered */
  /* mehtods should be used when you want to recalculate a value when anything on the page changes */
  /* Used when events occur! */

  /* methods should return something if you call them in double curly braces {{}} */
  /* otherwise if binded to an event, not required to return anything  */
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('Running outputFullName()')
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Mihaescu';
    }
  }
});

app.mount('#events');
