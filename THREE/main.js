function Check() {

    let email = "fifa2022@gmail.com";
    let pass = 12345;

    let userEmail = document.getElementById('email'); 
    let userPass = document.getElementById('pass');

    if(userEmail.value == email && userPass.value == pass){
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
      
    } else {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
}