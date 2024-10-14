



const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

 const formEl = document.querySelector('form')
let rowEl = document.querySelector('.row')

function generateNewMember(member){
  const {img, email, role, name} = member
  return `
  <div class=" col-sm-12 col-md-6 col-lg-4">
                    <div class="card mb-3">
                        <div class="row g-0">
                          <div class="col-md-4 bg-dark">
                            <img
                              src="${img}"
                              alt="Trendy Pants and Shoes"
                              class="img-fluid rounded-start"
                            />
                          </div>
                          <div class="col-md-8 bg-dark text-white">
                            <div class="card-body ">
                              <h5 class="card-title">${name}</h5>
                             <p class="card-text">
                                ${role}
                              </p>
                              <a class="text-decoration-none" href="">${email}</a>
                      
                            </div>
                          </div>
                        </div>
                      </div> 
                </div>
  
  `
}

for (let i = 0; i < teamMembers.length; i++){
  let teamMember = teamMembers[i]
  let { name, role, email, img} = teamMember
  let markup = `
  <div class=" col-sm-12 col-md-6 col-lg-4">
                    <div class="card mb-3">
                        <div class="row g-0">
                          <div class="col-md-4 bg-dark">
                            <img
                              src="${img}"
                              alt="Trendy Pants and Shoes"
                              class="img-fluid rounded-start"
                            />
                          </div>
                          <div class="col-md-8 bg-dark text-white">
                            <div class="card-body ">
                              <h5 class="card-title">${name}</h5>
                             <p class="card-text">
                                ${role}
                              </p>
                              <a class="text-decoration-none" href="">${email}</a>
                      
                            </div>
                          </div>
                        </div>
                      </div> 
                </div>

                
  
  `

  
rowEl.innerHTML += markup

}



formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value
  let role = document.getElementById('role').value
  let image = document.getElementById('img').value

let email = document.getElementById('email').value

const member = {name, role, image, email}
console.log(member);
const markup = generateNewMember(member)
console.log(markup);

rowEl.insertAdjacentHTML('beforeend', markup)
})
