export async function loadStudents({commit}) {
    commit('fetchStudentsBegin')
    fetch('http://127.0.0.1:8081/api/students')
        .then(response => response.json())
        .then((data) => {
            commit('fetchStudentsSuccess', {
                data: data
            })
        })
}

export async function loadStudent({commit}, id) {
    commit('fetchStudentBegin')
    fetch('http://127.0.0.1:8081/api/students/' + id)
        .then(response => response.json())
        .then((data) => {
            commit('fetchStudentSuccess', {
                data: data
            })
        })
}

export async function saveStudent({commit}, object) {
    if (object.id) {
        await fetch('http://127.0.0.1:8081/api/students/' + object.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        })
    } else {
        await fetch('http://127.0.0.1:8081/api/students/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        })
    }
}

export async function deleteStudent({commit}, id) {
    await fetch('http://127.0.0.1:8081/api/students/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}