/** @format */
if (typeof document != 'undefined') {
  var btnAdd = document.querySelector('#btnAdd');
  var btnDele = document.querySelector('#btnDele');
  var tBody_1 = document.querySelector('.tbody');
  var checkBoxes_1 = document.getElementById('checkBoxes');
  var checkValid_1 = function (selector, regex, messageError) {
    var _loop_1 = function (item) {
      item.onblur = function () {
        if (!regex.test(item.textContent)) {
          alert(messageError);
          item.textContent = '';
          return false;
        } else {
          return true;
        }
      };
    };
    for (var _i = 0, selector_1 = selector; _i < selector_1.length; _i++) {
      var item = selector_1[_i];
      _loop_1(item);
    }
  };
  var checkValidation_1 = function () {
    var fullName = document.querySelectorAll('.fullName');
    var phoneNumber = document.querySelectorAll('.phoneNumber');
    var email = document.querySelectorAll('.email');
    var regexEmail =
      /^[a-zA-Z0-9_](\.?[a-zA-Z0-9_]){2,31}@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    var regexNumberPhone = /^[0][0-9]{9}$/;
    var regexName =
      /[a-zA-Z]+([a-zA-Z]|\s|Á|À|Ạ|Ã|Ả|Ă|Ắ|Ằ|Ẳ|Ặ|Ẵ|Â|Ấ|Ầ|Ẫ|Ẩ|Ậ|É|È|Ẽ|Ẻ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ|Ì|Í|Ĩ|Ị|Ỉ|Ò|Ó|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ộ|Ổ|Ỗ|Ơ|Ớ|Ờ|Ở|Ợ|Ỡ|Ú|Ù|Ủ|Ụ|Ũ|Ư|Ứ|Ừ|Ữ|Ử|Ự|Ý|Ỳ|Ỹ|Ỵ|Ỷ|Đ|á|à|ạ|ã|ả|ă|ắ|ằ|ẳ|ặ|ẵ|â|ấ|ầ|ẫ|ẩ|ậ|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ể|ễ|ệ|ì|í|ĩ|ị|ỉ|ò|ó|ỏ|õ|ọ|ô|ố|ồ|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ợ|ỡ|ú|ù|ủ|ụ|ũ|ư|ứ|ừ|ữ|ử|ự|ý|ỳ|ỹ|ỵ|ỷ|đ)+$/;
    checkValid_1(
      phoneNumber,
      regexNumberPhone,
      'Number phone Invalid! Phone number must not exceed 10 characters and start 0, Example: 0943119999',
    );
    checkValid_1(
      email,
      regexEmail,
      'Email Invalid! Example: example@gmail.com',
    );
    checkValid_1(
      fullName,
      regexName,
      'Name Invalid! Example:Trần Hữu Thục Nguyên',
    );
  };
  var handleAdd = function () {
    var row = document.createElement('tr');
    row.innerHTML =
      '\n  <td><input type="checkbox" class="checkBox"></td>\n          <td class="fullName"></td>\n          <td class="phoneNumber"></td>\n          <td class="email"></td>\n          <td><button type="button" class="btn btn-danger btnDele">DELETE</button></td>';
    tBody_1.appendChild(row);
    infoValue_1();
    handleDeleRow_1();
    checkValidation_1();
  };
  var infoValue_1 = function () {
    var tdChilds = document.querySelectorAll('td');
    var _loop_2 = function (tdChild) {
      tdChild.onclick = function () {
        if (
          tdChild.childNodes[0] === undefined ||
          tdChild.childNodes[0].nodeName === '#text'
        ) {
          tdChild.contentEditable = true;
        }
      };
    };
    for (var _i = 0, tdChilds_1 = tdChilds; _i < tdChilds_1.length; _i++) {
      var tdChild = tdChilds_1[_i];
      _loop_2(tdChild);
    }
  };
  var handleDeleRow_1 = function () {
    var dele = document.querySelectorAll('.btnDele');
    var _loop_3 = function (deleItem) {
      deleItem.onclick = function () {
        var row = deleItem.parentElement.parentElement;
        row.remove();
      };
    };
    for (var _i = 0, dele_1 = dele; _i < dele_1.length; _i++) {
      var deleItem = dele_1[_i];
      _loop_3(deleItem);
    }
  };
  var handleDele_1 = function () {
    var checkBoxes = document.querySelectorAll('.checkBox');
    for (
      var _i = 0, checkBoxes_2 = checkBoxes;
      _i < checkBoxes_2.length;
      _i++
    ) {
      var checkBox = checkBoxes_2[_i];
      if (checkBox.checked) {
        var row = checkBox.parentElement.parentElement;
        row.remove();
      }
    }
  };
  checkBoxes_1.onchange = function () {
    var checkBoxAll = document.querySelectorAll('.checkBox');
    for (
      var _i = 0, checkBoxAll_1 = checkBoxAll;
      _i < checkBoxAll_1.length;
      _i++
    ) {
      var checkBox = checkBoxAll_1[_i];
      checkBox.checked = checkBoxes_1.checked;
    }
  };
  btnAdd.onclick = handleAdd;
  btnDele.onclick = function () {
    handleDele_1();
    checkBoxes_1.checked = false;
  };
  infoValue_1();
  handleDeleRow_1();
  checkValidation_1();
}
