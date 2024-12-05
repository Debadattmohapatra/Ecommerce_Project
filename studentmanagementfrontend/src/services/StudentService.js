import axios from 'axios';

export async function getStudents(){
    return await axios.get('http://127.0.0.1:8000/students/')
    .then(response=>response.data)
}

export async function addStudent(student){
    return await axios.post('http://127.0.0.1:8000/students/', {
      StudentId:null,
      FirstName:student.FirstName.value,
      LastName:student.LastName.value,
      RegistrationNo:student.RegistrationNo.value,
      Email:student.Email.value,
      Course:student.Course.value
    })
      .then(response=>response.data)
  }

  export async function updateStudent(stuid, student) {
    return await axios.put('http://127.0.0.1:8000/students/' + stuid + '/', {
      FirstName:student.FirstName.value,
      LastName:student.LastName.value,
      RegistrationNo:student.RegistrationNo.value,
      Email:student.Email.value,
      Course:student.Course.value
    })
     .then(response => response.data)
  }

  export async function deleteStudent(studentId) {
    return await axios.delete('http://127.0.0.1:8000/students/' + studentId + '/', {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }
  