let age = document.getElementById('age');

function showUser(surname, name) {
    //let connect = showUser.call(age);
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value );
}
showUser.apply(age, ['Горький', ' Максим']);