function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let navBar = document.createElement('nav');
    links.forEach(link => {
      let a = document.createElement('a')
      a.textContent = link.textContent;
      a.href = link.href;
      a.title = link.title
      navBar.appendChild(a)
    })

    return navBar
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    //  ✨ do your magic here
    let newCard = document.createElement('div');
    newCard.classList.add('learner-card');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    p1.textContent = learner.fullName;
    p2.textContent = `Learner ID: ${learner.id}`;
    p3.textContent = `Date of Birth: ${learner.dateOfBirth}`;
    p4.textContent = `Favorite Language: ${learner.favLanguage}`;

    newCard.appendChild(p1)
    newCard.appendChild(p2)
    newCard.appendChild(p3)
    newCard.appendChild(p4)

    newCard.addEventListener('click', (e) => {
      e.stopPropagation()
      let previousTarget = document.querySelector('.active');
      if(previousTarget) {
        previousTarget.classList.remove('active');
        newCard.classList.add('active')
      } else {
        newCard.classList.add('active')
      }
    })

    return newCard
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    let section = document.querySelector('section')
    learners.forEach(learner => {
      let newCard = buildLearnerCard(learner, languages);
      section.appendChild(newCard);
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    console.log(footerData)
    let newFooter = document.createElement('footer');
      let companyInfo = document.createElement('div');
      companyInfo.classList.add('company-info')
      newFooter.appendChild(companyInfo)
        Object.keys(footerData).forEach((val) => {
          let pTag = document.createElement('p');
          if(val !== 'socialMedia') {
            pTag.textContent = footerData[val];
            pTag.classList.add(val)
            companyInfo.appendChild(pTag)
          }
          if(val === 'contactEmail') {
            let aTag = document.createElement('a');
            aTag.href = `mailto:${footerData[val]}`
            aTag.textContent = `${footerData[val]}`
            pTag.textContent = `Email: `
            pTag.appendChild(aTag)
          }
        })
        
      // console.log(footerData)

      let socialMedia = document.createElement('div')
      socialMedia.classList.add('social-media')
      newFooter.appendChild(socialMedia)
        Object.keys(footerData.socialMedia).forEach((prop) => {
        let aTag = document.createElement('a');
        aTag.href = footerData.socialMedia[prop];
        let upperProp = prop.charAt(0).toUpperCase() + prop.slice(1);
        aTag.textContent = upperProp;
        
        socialMedia.appendChild(aTag)
        })

      let bloomDiv = document.createElement('div');
      bloomDiv.textContent = `© ${footerData.companyName.toUpperCase()} 2024`
      newFooter.appendChild(bloomDiv)
      

    return newFooter
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  //  ✨ do your magic here
  let section = document.querySelector('section')
  section.addEventListener('click', () => {
    let findCard = document.querySelector('.active');
    findCard && findCard.classList.remove('active')
  })

}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
