/** @format */
if (typeof (document) != 'undefined') {
  const btnAdd = <HTMLInputElement>document.querySelector('#btnAdd');
  const btnDele = <HTMLInputElement>document.querySelector('#btnDele');
  const tBody: HTMLElement = document.querySelector('.tbody');
  const checkBoxes = <HTMLInputElement>document.getElementById('checkBoxes');

  const checkValid = (selector: any, regex: any, messageError: string): void => {
    for (const item of selector) {
      item.onblur = () => {
        if (!regex.test(item.textContent)) {
          alert(messageError);
          item.textContent = '';
          return false;
        } else {
          return true;
        }
      };
    }
  };

  const checkValidation = (): void => {
    const fullName: any = document.querySelectorAll('.fullName');
    const phoneNumber: any = document.querySelectorAll('.phoneNumber');
    const email: any = document.querySelectorAll('.email');
    const regexEmail: any =
      /^[a-zA-Z0-9_](\.?[a-zA-Z0-9_]){2,31}@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    const regexNumberPhone: any = /^[0][0-9]{9}$/;
    const regexName: any =
      /[a-zA-Z]+([a-zA-Z]|\s|Á|À|Ạ|Ã|Ả|Ă|Ắ|Ằ|Ẳ|Ặ|Ẵ|Â|Ấ|Ầ|Ẫ|Ẩ|Ậ|É|È|Ẽ|Ẻ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ì|Í|Ĩ|Ị|Ỉ|Ò|Ó|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|Ơ|Ớ|Ờ|Ở|Ợ|Ỡ|Ú|Ù|Ủ|Ụ|Ũ|Ư|Ứ|Ừ|Ữ|Ử|Ự|Ý|Ỳ|Ỹ|Ỵ|Ỷ|Đ|á|à|ạ|ã|ả|ă|ắ|ằ|ẳ|ặ|ẵ|â|ấ|ầ|ẫ|ẩ|ậ|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ể|ễ|ệ|ì|í|ĩ|ị|ỉ|ò|ó|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ợ|ỡ|ú|ù|ủ|ụ|ũ|ư|ứ|ừ|ữ|ử|ự|ý|ỳ|ỹ|ỵ|ỷ|đ)+$/;
    checkValid(
      phoneNumber,
      regexNumberPhone,
      'Number phone Invalid! Phone number must not exceed 10 characters and start 0, Example: 0943119999',
    );
    checkValid(email, regexEmail, 'Email Invalid! Example: example@gmail.com');
    checkValid(fullName, regexName, 'Name Invalid! Example:Trần Hữu Thục Nguyên');
  };

  const handleAdd = (): void => {
    const row: any = document.createElement('tr');
    row.innerHTML = `
  <td><input type="checkbox" class="checkBox"></td>
          <td class="fullName"></td>
          <td class="phoneNumber"></td>
          <td class="email"></td>
          <td><button type="button" class="btn btn-danger btnDele">DELETE</button></td>`;
    tBody.appendChild(row);
    infoValue();
    handleDeleRow();
    checkValidation();
  };

  const infoValue = (): void => {
    const tdChilds: any = document.querySelectorAll('td');
    for (const tdChild of tdChilds) {
      tdChild.onclick = () => {
        if (
          tdChild.childNodes[0] === undefined ||
          tdChild.childNodes[0].nodeName === '#text'
        ) {
          tdChild.contentEditable = true;
        }
      };
    }
  };

  const handleDeleRow = (): void => {
    const dele: any = document.querySelectorAll('.btnDele');
    for (const deleItem of dele) {
      deleItem.onclick = () => {
        const row: any = deleItem.parentElement.parentElement;
        row.remove();
      };
    }
  };

  const handleDele = (): void => {
    const checkBoxes: any = document.querySelectorAll('.checkBox');
    for (const checkBox of checkBoxes) {
      if (checkBox.checked) {
        const row: any = checkBox.parentElement.parentElement;
        row.remove();
      }
    }
  };
  checkBoxes.onchange = (): void => {
    const checkBoxAll: any = document.querySelectorAll('.checkBox');
    for (const checkBox of checkBoxAll) {
      checkBox.checked = checkBoxes.checked;
    }
  };
  btnAdd.onclick = handleAdd;
  btnDele.onclick = (): void => {
    handleDele();
    checkBoxes.checked = false;
  };
  infoValue();
  handleDeleRow();
  checkValidation();
}