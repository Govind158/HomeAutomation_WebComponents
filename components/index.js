class ToggleOnOff extends HTMLElement{
  constructor(){
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
    const name = this.getAttribute('name');
    const icon = this.getAttribute('icon');

    const button = document.createElement('button');
    button.classList.add("button-style");
    button.addEventListener('click', this.toggleSwitch.bind(this));

    const iconImage = document.createElement('img');
    iconImage.src = icon;
    iconImage.classList.add("icon-style");
    button.appendChild(iconImage);
    this.shadow.appendChild(button);

    const switchStatus = localStorage.getItem(`switchStatus_${name}`)
    if(switchStatus === 'true'){
      button.classList.add('on');
    }
    const style = document.createElement('style');
    style.textContent =`
      button.button-style{
        width: 100px;
        height: 100px;
        color: #007bff;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        margin-left: 5px;
        margin-right: 5px;
        border: 0;
      }
      
      button.button-style.on {
          background-color: #fbda01;
          color: #fff;
        }
      .icon-style{
        width: 60px;
        height: 60px;
      }
    `;
    this.shadow.appendChild(style);
  }
    toggleSwitch(){
      const button = this.shadow.querySelector('button');
      const name = this.getAttribute('name');
      const switchStatus = button.classList.toggle("on");

      localStorage.setItem(`switchStatus_${name}`, switchStatus);
  }
}
customElements.define('toggle-button', ToggleOnOff);