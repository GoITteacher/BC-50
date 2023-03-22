function func() {
    console.log(this);
}
let user = {
    firstName: 'Вася',
    func: func,
};
const user2 = {};
const func3 = user.func.bind(user2);
func3.call(user);