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

let rowEl = document.querySelector('.row')

for (let i = 0; i < teamMembers.length; i++){
  let teamMember = teamMembers[i]
  let { name, role, email, img} = teamMember
  let markup = `
  <div class="col-4">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="${img}"
                              alt="Trendy Pants and Shoes"
                              class="img-fluid rounded-start"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${name}</h5>
                             <p class="card-text">
                                ${role}
                              </p>
                              <p class="card-text">
                                ${email}
                              </p>
                      
                            </div>
                          </div>
                        </div>
                      </div> 
                </div>

                
  
  `
rowEl.innerHTML += markup

}


