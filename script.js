const mentors = [
    {
        name: "Dr. Birmohan Singh",
        qualifications: "Ph.D., M.E.",
        position: "Professor",
        email: "birmohansingh@sliet.ac.in, birmohans@gmail.com",
        phone: "+91-1672-253208",
        image: "Dr. Birmohan Singh.jpg"
    },
    {
        name: "Dr. Damanpreet Singh",
        qualifications: "Ph.D., M.Tech., B.Tech.",
        position: "Professor",
        email: "damanpreets@sliet.ac.in",
        phone: "+91-1672-253210",
        image: "Dr. Damanpreet Singh.jpg"
    },
    {
        name: "Dr. Major Singh Goraya",
        qualifications: "Ph.D., M.Tech., B.Tech.",
        position: "Professor",
        email: "mjrsingh@yahoo.com",
        phone: "01672-253212",
        image: "Dr. Major Singh Goraya.jpg"
    },
    {
        name: "Dr. Manoj Sachan",
        qualifications: "B.Tech(Computer Science), M.E(Computer Science), Ph.D(Computer Science & Engineering)",
        position: "Professor",
        email: "manojsachan@sliet.ac.in, manojsachan@gmail.com",
        phone: "+91-1672-253214",
        image: "Dr. Manoj Sachan.jpg"
    },
    {
        name: "Dr. Gurjinder Kaur",
        qualifications: "B.E. Kyrgyz Technical University, Bishkek M.S. BITS, Pilani Ph.D SLIET, Longowal",
        position: "Associate Professor",
        email: "gurjinder13@yahoo.com",
        phone: "+91-1672-253326",
        image: "Dr. Gurjinder Kaur.jpg"
    },
    {
        name: "Dr. Amar Nath",
        qualifications: "Ph.D. in CSE from IIT Roorkee, Sept. 2020. Thesis 'A Distributed Approach for Collaborative Task Execution in Dynamic Environment'   M. Tech. in CSE from NIT Rourkela, June 2014.   B. Tech. in CSE from  BIET Jhansi,  June 2006",
        position: "Assistant Professor",
        email: "amarnath@sliet.ac.in",
        phone: "01672-253610",
        image: "Dr. Amar Nath.jpg"
    },
    {
        name: "Dr. Jagdeep Singh",
        qualifications: "Ph.D.  entitled (Proficient Route Selection Strategies for Effective Routing in Delay-Tolerant Opportunistic Networks) from the University of Delhi, New Delhi,   M. Tech, Computer Science & Engineering,   B. Tech, Computer Science & Engineering",
        position: "Assistant Professor",
        email: "jagdeep@sliet.ac.in; jagdeepknit@gmail.com",
        phone: "01672-253320",
        image: "Dr. Jagdeep Singh.jpg"
    },
    {
        name: "Dr. Manminder Singh",
        qualifications: "B.Tech (Computer Science & Engineering) M.Tech (Computer Science & Engineering) Ph. D (Computer Science & Engineering)",
        position: "Assistant Professor",
        email: "manminderldh@gmail.com, manmindersingh@sliet.ac.in",
        phone: "+91-01672-253328",
        image: "Dr. Manminder Singh.jpg"
    },
    {
        name: "Dr. Preetpal Kaur Buttar",
        qualifications: "PhD (Computer Science & Engineering)",
        position: "Assistant Professor",
        email: "preetpal@sliet.ac.in",
        phone: "01672-253614",
        image: "Dr. Preetpal Kaur Buttar.jpg"
    },
    {
        name: "Dr. Tajinder Singh",
        qualifications: "Ph.D entitled “Machine Learning Based Text Mining in Social Media” from National Institute of Technology, Hamirpur, India.",
        position: "Assistant Professor",
        email: "tajindersingh@sliet.ac.in",
        phone: "91-6283963279",
        image: "Dr. Tajinder Singh.jpg"
    },
    {
        name: "Dr. Utkarsh",
        qualifications: "Doctor of Philosophy School of Computer & Systems Sciences Jawaharlal Nehru University, New Delhi, India   Master of Technology (Computer Science and Technology) School of Computer & Systems Sciences Jawaharlal Nehru University, New Delhi, India   Bachelor of Technology (Information Technology) University Institute of Engineering & Technology CSJM University, Kanpur, India",
        position: "Assistant Professor",
        email: "-",
        phone: "-",
        image: "Dr. Utkarsh.jpg"
    },
    {
        name: "Dr. VINOD KUMAR VERMA",
        qualifications: "Ph.D. Computer Science and Engineering",
        position: "Assistant Professor",
        email: "vinod5881@gmail.com",
        phone: "+91-1672-253218",
        image: "Dr. VINOD KUMAR VERMA.jpg"
    },
    {
        name: "Jaspal Singh",
        qualifications: "M.E. ( CSE & IT), Pursuing  PhD. in Cloud Computing",
        position: "Assistant Professor",
        email: "safrisoft@yahoo.com, jaspalsingh@sliet.ac.in",
        phone: "01672-253327",
        image: "Jaspal Singh.jpg"
    },
    {
        name: "Rahul Gautam",
        qualifications: "Ph.D. pursuing, M.Tech (Computer Science and Applications), B.Tech(Computer Science and Info. Technology) ",
        position: "Assistant Professor",
        email: "rahulgautam@sliet.ac.in",
        phone: "+91-1672-25 3612",
        image: "Rahul Gautam.jpg"
    },
    {
        name: "Dr. Jatinder Pal Singh",
        qualifications: "B.Tech - Computer Science and Engineering, M.Tech - Computer Science and Engineering, ",
        position: "Assistant Professor(Contract)",
        email: "sachdeva.jp@gmail.com, jatinderpalsingh@sliet.ac.in",
        phone: "-",
        image: "Dr. Jatinder Pal Singh.jpg"
    },
    {
        name: "Sukhpreet Singh",
        qualifications: "B.Tech M.Tech Ph.D (Pursuing)",
        position: "Assistant Professor(Contract)",
        email: "sukhpreet.manshahia@gmail.comn",
        phone: "-",
        image: "Sukhpreet Singh.jpg"
    },
    {
        name: "Abhishek",
        qualifications: "-",
        position: "Guest/Part-Time Teachers",
        email: "-",
        phone: "-",
        image: "Abhishek.png"
    },
    {
        name: "Chinu",
        qualifications: "B.Tech(IT) , M.Tech(Computer Science & Engineering), Ph.D (Big Data, Hadoop, MongoDB) ",
        position: "Guest/Part-Time Teachers",
        email: "contactvikashgarg@gmail.com",
        phone: "9988610629",
        image: "Chinu.jpg"
    },
    
    {
        name: "Sakshi Bansal",
        qualifications: "-",
        position: "Guest/Part-Time Teachers",
        email: "-",
        phone: "-",
        image: "Abhishek.png"
    },
    {
        name: "Sunita Rani",
        qualifications: "Ph.D(Pursuing),M.Tech,B.Tech",
        position: "Guest/Part-Time Teachers",
        email: "sunitarani@sliet.ac.in",
        phone: "8196013222",
        image: "Sunita Rani.jpg"
    },
];

function renderMentors(mentorsToDisplay) {
    const mentorContainer = document.getElementById('mentor-container');
    mentorContainer.innerHTML = '';  

    mentorsToDisplay.forEach((mentor) => {
        const mentorProfile = document.createElement('section');
        mentorProfile.classList.add('mentor-profile');

        mentorProfile.innerHTML = `
            <img src="${mentor.image}" alt="Image of ${mentor.name}" class="mentor-image">
            <h2>${mentor.name}</h2>
            <p><strong>Qualifications:</strong> ${mentor.qualifications}</p>
            <p><strong>Phone:</strong> ${mentor.phone}</p>
            <p><strong>Email:</strong> ${mentor.email}</p>
            <button class="book-now-btn" data-mentor="${mentor.name}">Book Now</button>
        `;
        mentorContainer.appendChild(mentorProfile);
    });

    const bookNowButtons = document.querySelectorAll('.book-now-btn');
    bookNowButtons.forEach(button => {
        button.addEventListener('click', function () {
            openBookingModal(this.getAttribute('data-mentor'));
        });
    });
}

function searchMentors() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredMentors = mentors.filter(mentor => {
        return mentor.name.toLowerCase().includes(searchInput);
    });
    renderMentors(filteredMentors);
}

document.addEventListener('DOMContentLoaded', function () {
    renderMentors(mentors);

    const searchField = document.getElementById('search');
    searchField.addEventListener('input', searchMentors);
});

// Modal functionality
const modal = document.getElementById('booking-modal');
const span = document.getElementsByClassName('close')[0];

function openBookingModal(mentorName) {
    modal.style.display = 'block';
    document.getElementById('booking-form').onsubmit = function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const department = document.getElementById('department').value;
        const email = document.getElementById('email').value;
        const slot = document.getElementById('slot').value;

        alert(`Booking confirmed with ${mentorName}\nName: ${name}\nDepartment: ${department}\nEmail: ${email}\nSlot: ${slot}`);
        modal.style.display = 'none'; 
    };
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
