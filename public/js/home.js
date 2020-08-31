const task1 = document.querySelector('.tasks1');
const task2 = document.querySelector('.tasks2');
const task3 = document.querySelector('.tasks3');
const task4 = document.querySelector('.tasks4');
const task5 = document.querySelector('.tasks5');
const task6 = document.querySelector('.tasks6');
const task7 = document.querySelector('.tasks7');
const task8 = document.querySelector('.tasks8');
const taskcheck1 = document.querySelector('.tasks_check1');
const taskcheck2 = document.querySelector('.tasks_check2');
const taskcheck3 = document.querySelector('.tasks_check3');
const taskcheck4 = document.querySelector('.tasks_check4');
const taskcheck5 = document.querySelector('.tasks_check5');
const taskcheck6 = document.querySelector('.tasks_check6');
const taskcheck7 = document.querySelector('.tasks_check7');
const taskcheck8 = document.querySelector('.tasks_check8');
const id1 = taskcheck1.querySelector('.id').textContent;
const id2 = taskcheck2.querySelector('.id').textContent;
const id3 = taskcheck3.querySelector('.id').textContent;
const id4 = taskcheck4.querySelector('.id').textContent;
const id5 = taskcheck5.querySelector('.id').textContent;
const id6 = taskcheck6.querySelector('.id').textContent;
const id7 = taskcheck7.querySelector('.id').textContent;
const id8 = taskcheck8.querySelector('.id').textContent;
const name = document.querySelector('.name').textContent;
const check1 = document.querySelector('.checkbox1');
const check2 = document.querySelector('.checkbox2');
const check3 = document.querySelector('.checkbox3');
const check4 = document.querySelector('.checkbox4');
const check5 = document.querySelector('.checkbox5');
const check6 = document.querySelector('.checkbox6');
const check7 = document.querySelector('.checkbox7');
const check8 = document.querySelector('.checkbox8');
const note1 = document.querySelector('#note_1');
const note2 = document.querySelector('#note_2');
const note3 = document.querySelector('#note_3');
const note4 = document.querySelector('#note_4');
const note5 = document.querySelector('#note_5');
const note6 = document.querySelector('#note_6');
const note7 = document.querySelector('#note_7');
const note8 = document.querySelector('#note_8');
const text1 = document.querySelector('.text_1');
const text2 = document.querySelector('.text_2');
const text3 = document.querySelector('.text_3');
const text4 = document.querySelector('.text_4');
const text5 = document.querySelector('.text_5');
const text6 = document.querySelector('.text_6');
const text7 = document.querySelector('.text_7');
const text8 = document.querySelector('.text_8');
const icon1 = document.querySelector('.icon_1');
const icon2 = document.querySelector('.icon_2');
const icon3 = document.querySelector('.icon_3');
const icon4 = document.querySelector('.icon_4');
const icon5 = document.querySelector('.icon_5');
const icon6 = document.querySelector('.icon_6');
const icon7 = document.querySelector('.icon_7');
const icon8 = document.querySelector('.icon_8');
const iconId1 = note1.querySelector('.id').textContent;
const iconId2 = note2.querySelector('.id').textContent;
const iconId3 = note3.querySelector('.id').textContent;
const iconId4 = note4.querySelector('.id').textContent;
const iconId5 = note5.querySelector('.id').textContent;
const iconId6 = note6.querySelector('.id').textContent;
const iconId7 = note7.querySelector('.id').textContent;
const iconId8 = note8.querySelector('.id').textContent;
const input = document.querySelector('.text');
const logout = document.querySelector('.logoutbtn');
const deleteUser = document.querySelector('.delete');
const features = document.querySelector('.instructions');
const note = document.querySelector('.noteRadio');
const task = document.querySelector('.taskRadio');

note.addEventListener('click', function (e) {
    location.href = `/home/notes/?name=${name}`;
});

logout.addEventListener('click', function (e) {
    location.href = `/signout/?name=${name}`;
});

features.addEventListener('click', function (e) {
    alert(
        `
        1. Click and drag the bottom right corner of any note under the "All Notes" section to resize the note to your liking.

        2. On completion of a task you can check the box to the right of the task to delete it.

        3. When done with a note you can click the X to delete the note.

        4. If you ever forget your password please use the "forgot password" button on the sign up and sign in pages to navigate to a new page that will allow you to login with a new password.`
    );
});

deleteUser.addEventListener('click', function (e) {
    location.href = `/deleteuser/?name=${name}`;
});

task.addEventListener('click', function (e) {
    location.href = `/home/tasks/?name=${name}`;
});

check1.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id1}&name=${name}`;
});
check2.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id2}&name=${name}`;
});
check3.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id3}&name=${name}`;
});
check4.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id4}&name=${name}`;
});
check5.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id5}&name=${name}`;
});
check6.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id6}&name=${name}`;
});
check7.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id7}&name=${name}`;
});
check8.addEventListener('click', function (e) {
    location.href = `/deletetask/?id=${id8}&name=${name}`;
});

icon1.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId1}&name=${name}`;
});
icon2.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId2}&name=${name}`;
});
icon3.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId3}&name=${name}`;
});
icon4.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId4}&name=${name}`;
});
icon5.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId5}&name=${name}`;
});
icon6.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId6}&name=${name}`;
});
icon7.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId7}&name=${name}`;
});
icon8.addEventListener('click', function (e) {
    location.href = `/deletenote/?id=${iconId8}&name=${name}`;
});

if (task1.innerText.length === 0) {
    taskcheck1.style.display = 'none';
}
if (task2.innerText.length === 0) {
    taskcheck2.style.display = 'none';
}
if (task3.innerText.length === 0) {
    taskcheck3.style.display = 'none';
}
if (task4.innerText.length === 0) {
    taskcheck4.style.display = 'none';
}
if (task5.innerText.length === 0) {
    taskcheck5.style.display = 'none';
}
if (task6.innerText.length === 0) {
    taskcheck6.style.display = 'none';
}
if (task7.innerText.length === 0) {
    taskcheck7.style.display = 'none';
}
if (task8.innerText.length === 0) {
    taskcheck8.style.display = 'none';
}

if (text1.innerHTML.length === 0) {
    note1.style.display = 'none';
}
if (text2.innerHTML.length === 0) {
    note2.style.display = 'none';
}
if (text3.innerHTML.length === 0) {
    note3.style.display = 'none';
}
if (text4.innerHTML.length === 0) {
    note4.style.display = 'none';
}
if (text5.innerHTML.length === 0) {
    note5.style.display = 'none';
}
if (text6.innerHTML.length === 0) {
    note6.style.display = 'none';
}
if (text7.innerHTML.length === 0) {
    note7.style.display = 'none';
}
if (text8.innerHTML.length === 0) {
    note8.style.display = 'none';
}

function submitOnEnter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.target.form.submit(new Event('submit'));
    }
}

input.addEventListener('keypress', submitOnEnter);
