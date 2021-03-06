let timeOut;

function fbtoastr(status,message,mode,time) {
  if(document.getElementById('fb-toastr')) {
    document.getElementById('fb-toastr').remove();
  }
  const elem = document.createElement('div')
  elem.setAttribute('id','fb-toastr')
  document.body.appendChild(elem)
  const el = document.getElementById('fb-toastr')
  el.style.position = 'fixed'
  el.style.left = 0
  el.style.bottom = 0
  el.style.padding = '15px'
  el.style.fontFamily = 'Arial'
  let seconds = 3000
  seconds = time > 0 ? time : seconds;
  let bg = '#FFFFFF'
  let color = '#000000'
  let border = 'box-shadow:0 0 5px 0 #e3e3e3';
  let status_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><style>.cls-1{fill:#00a200;}.cls-2{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="7.5" cy="7.5" r="7.5"/><polyline class="cls-2" points="10.31 4 5.92 8.39 4.24 6.76 3 8.08 5.92 11 11.63 5.28 10.31 4"/></g></g></svg>'
  if(mode=='dark') {
    bg = '#333333'
    color = '#FFFFFF'
    border = '';
  }
  if(status=='error') {
    status_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><style>.cls-1{fill:#ee1b24;}.cls-2{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="7.5" cy="7.5" r="7.5"/><polygon class="cls-2" points="7.5 6.18 5.28 4 4 5.28 6.22 7.5 4.04 9.72 5.32 11 7.54 8.78 9.76 11 11.04 9.72 8.82 7.5 11.04 5.28 9.72 4 7.5 6.18"/></g></g></svg>'
  }
  el.innerHTML = `
    <div id='fb-toastr-container' style='background-color:${bg};border-radius:5px;cursor:pointer;${border}' onclick='closeToastr();'>
      <div style='display:flex;justify-content:center;align-items:center;padding:15px 20px 15px 20px;'>
        <div id='fb-toastr-icon' style='display:flex;justify-content:center;align-items:center;padding-right:50px;'>
          <div style='height:20px;width:20px;padding-right:10px;'>
            ${status_icon}
          </div>
          <h1 style='color:${color};font-size:14px;'>${message}</h1>
        </div>
        <style>
          #fb-toastr-close:hover .clsx-1 {
            fill:#d9dbde;
          }
        </style>
        <div id='fb-toastr-close' style='height:20px;width:20px;cursor:pointer;' onclick='closeToastr();'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><defs><style>.clsx-1{fill:#e4e6eb;}.clsx-2{fill:#727272;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="clsx-1" cx="7.5" cy="7.5" r="7.5"/><polygon class="clsx-2" points="7.5 6.18 5.28 4 4 5.28 6.22 7.5 4.04 9.72 5.32 11 7.54 8.78 9.76 11 11.04 9.72 8.82 7.5 11.04 5.28 9.72 4 7.5 6.18"/></g></g></svg>
        </div>
      </div>
    </div>
  `
  timeOut = setTimeout(() => {
    closeToastr();
  }, parseInt(seconds));
}

function closeToastr () {
  if(document.querySelector('#fb-toastr-container')) {
    document.querySelector('#fb-toastr-container').remove();
  }
  clearTimeout(timeOut);
}