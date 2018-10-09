var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var bank = {
  false:
  {
    Q: {
      keyCode: 81,
      name: 'Heater 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

    W: {
      keyCode: 87,
      name: 'Heater 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

    E: {
      keyCode: 69,
      name: 'Heater 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

    A: {
      keyCode: 65,
      name: 'Heater 4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

    S: {
      keyCode: 83,
      name: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

    D: {
      keyCode: 68,
      name: 'Open HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

    Z: {
      keyCode: 90,
      name: "Kick n'Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

    X: {
      keyCode: 88,
      name: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

    C: {
      keyCode: 67,
      name: 'Closed HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' } },


  true:
  {
    Q: {
      keyCode: 81,
      name: 'Chord 1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

    W: {
      keyCode: 87,
      name: 'Chord 2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

    E: {
      keyCode: 69,
      name: 'Chord 3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },

    A: {
      keyCode: 65,
      name: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

    S: {
      keyCode: 83,
      name: 'Open HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

    D: {
      keyCode: 68,
      name: 'Closed HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

    Z: {
      keyCode: 90,
      name: 'Punchy Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

    X: {
      keyCode: 88,
      name: 'Side Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },

    C: {
      keyCode: 67,
      name: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' } } };




var keyCode = { 81: 'Q', 87: 'W', 69: 'E', 65: 'A', 83: 'S', 68: 'D', 90: 'Z', 88: 'X', 67: 'C' };var

App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
  }_createClass(App, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement(DrumMachine, null),
          React.createElement(Author, null)));


    } }]);return App;}(React.Component);var


DrumMachine = function (_React$Component2) {_inherits(DrumMachine, _React$Component2);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this2 = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this2.state = { power: true,
      bank: false,
      volume: 50,
      display: 'Power On',
      bg: { background: 'grey' },
      bgDefault: { background: 'grey' },
      key: '',
      url: '' };

    _this2.power = _this2.power.bind(_this2);
    _this2.bank = _this2.bank.bind(_this2);
    _this2.volume = _this2.volume.bind(_this2);
    _this2.drumPad = _this2.drumPad.bind(_this2);
    _this2.changeBG = _this2.changeBG.bind(_this2);
    _this2.playSound = _this2.playSound.bind(_this2);
    _this2.handleKeyPress = _this2.handleKeyPress.bind(_this2);return _this2;
  }_createClass(DrumMachine, [{ key: 'componentDidMount', value: function componentDidMount()

    {
      document.addEventListener('keydown', this.handleKeyPress);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
    } }, { key: 'handleKeyPress', value: function handleKeyPress(

    e) {
      if (keyCode[e.keyCode] != undefined) {
        console.log("aaaa:" + keyCode[e.keyCode]);
        this.playSound(keyCode[e.keyCode]);
      }
    } }, { key: 'drumPad', value: function drumPad(

    e) {
      var key = e.target.getAttribute('value');
      this.playSound(key);
    } }, { key: 'playSound', value: function playSound(

    key) {var _this3 = this;
      if (this.state.power === true) {
        var item = bank[this.state.bank];

        this.setState({
          bg: { background: 'orange' },
          key: key,
          display: bank[this.state.bank][key].name,
          url: bank[this.state.bank][key].url });

        this.player = document.getElementById(key);
        this.player.currentTime = 0;
        this.player.play();

        setTimeout(function () {return _this3.changeBG();}, 100);
      }
    } }, { key: 'changeBG', value: function changeBG()

    {
      this.setState({ bg: { background: 'grey' } });
    } }, { key: 'power', value: function power()

    {
      if (this.state.power === true) {
        this.setState({ power: false, display: 'Power Off' });
      } else {
        this.setState({ power: true, display: 'Power On' });
      }
    } }, { key: 'bank', value: function bank()

    {
      if (this.state.bank === true) {
        this.setState({ bank: false, display: 'Heater Kit' });
      } else {
        this.setState({ bank: true, display: 'Smooth Piano Kit' });
      }
    } }, { key: 'volume', value: function volume(

    e) {
      this.setState({ volume: e.target.value, display: 'Volume: ' + e.target.value });
      this.players = document.getElementsByClassName("clip");
      this.players.volume = e.target.value / 100;
    } }, { key: 'render', value: function render()



    {
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('div', { className: 'logo' },
            React.createElement('i', { className: 'fa fa-free-code-camp' }), ' FCC'),

          React.createElement('div', { className: 'pad-bank' },
            React.createElement('div', { id: 'item1', className: 'drum-pad item1', onClick: this.drumPad, value: 'Q', style: this.state.key == 'Q' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'Q', src: bank[this.state.bank]['Q'].url, volume: this.state.volume / 100 }), 'Q'),


            React.createElement('div', { id: 'item2', className: 'drum-pad item2', onClick: this.drumPad, value: 'W', style: this.state.key == 'W' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'W', src: bank[this.state.bank]['W'].url, volume: this.state.volume / 100 }), 'W'),


            React.createElement('div', { id: 'item3', className: 'drum-pad item3', onClick: this.drumPad, value: 'E', style: this.state.key == 'E' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'E', src: bank[this.state.bank]['E'].url, volume: this.state.volume / 100 }), 'E'),


            React.createElement('div', { id: 'item4', className: 'drum-pad item4', onClick: this.drumPad, value: 'A', style: this.state.key == 'A' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'A', src: bank[this.state.bank]['A'].url, volume: this.state.volume / 100 }), 'A'),


            React.createElement('div', { id: 'item5', className: 'drum-pad item5', onClick: this.drumPad, value: 'S', style: this.state.key == 'S' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'S', src: bank[this.state.bank]['S'].url, volume: this.state.volume / 100 }), 'S'),


            React.createElement('div', { id: 'item6', className: 'drum-pad item6', onClick: this.drumPad, value: 'D', style: this.state.key == 'D' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'D', src: bank[this.state.bank]['D'].url, volume: this.state.volume / 100 }), 'D'),


            React.createElement('div', { id: 'item7', className: 'drum-pad item7', onClick: this.drumPad, value: 'Z', style: this.state.key == 'Z' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'Z', src: bank[this.state.bank]['Z'].url, volume: this.state.volume / 100 }), 'Z'),


            React.createElement('div', { id: 'item8', className: 'drum-pad item8', onClick: this.drumPad, value: 'X', style: this.state.key == 'X' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'X', src: bank[this.state.bank]['X'].url, volume: this.state.volume / 100 }), 'X'),


            React.createElement('div', { id: 'item9', className: 'drum-pad item9', onClick: this.drumPad, value: 'C', style: this.state.key == 'C' ? this.state.bg : this.state.bgDefault },
              React.createElement('audio', { className: 'clip', id: 'C', src: bank[this.state.bank]['C'].url, volume: this.state.volume / 100 }), 'C')),



          React.createElement('div', { className: 'control' },
            React.createElement('div', { className: 'switchButton' }, 'Power',
              React.createElement('br', null),
              React.createElement('label', { className: 'switch' },
                React.createElement('input', { type: 'checkbox', checked: this.state.power, onClick: this.power, onChange: function onChange() {} }),
                React.createElement('span', { className: 'slider' }))),


            React.createElement('div', { id: 'display' }, this.state.display),
            React.createElement('div', null,
              React.createElement('input', { type: 'range', min: '0', max: '100', value: this.state.volume, step: '1', disabled: !this.state.power, className: 'slider1', onChange: this.volume })),

            React.createElement('div', { className: 'switchButton' }, 'Bank',
              React.createElement('br', null),
              React.createElement('label', { className: 'switch' },
                React.createElement('input', { type: 'checkbox', disabled: !this.state.power, onClick: this.bank, onChange: function onChange() {} }),
                React.createElement('span', { className: 'slider' }))))));





    } }]);return DrumMachine;}(React.Component);var


Author = function (_React$Component3) {_inherits(Author, _React$Component3);function Author() {_classCallCheck(this, Author);return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));}_createClass(Author, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'author' }, 'Designed and Coded By',
          React.createElement('br', null),
          React.createElement('a', { target: '_blank', href: 'https://codepen.io/dashzeveg' }, 'Dashzeveg')));


    } }]);return Author;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/*
                                                                                 $(document).ready(function(){
                                                                                   $('#app').click(function() {
                                                                                     $(this).css('color', 'red');
                                                                                   });
                                                                                 });
                                                                                 */