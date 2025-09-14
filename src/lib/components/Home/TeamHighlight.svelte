<script>
    // Team members data
    const teamMembers = [
      {
        name: "Dr. Jasmine Jade Broomhead",
        credential: "BVetMed MRCVS",
        role: "Lead Veterinarian",
        image: "placeholder-team-pic_small.jpg",
        specialties: "Small Animals, Surgery"
      },
      {
        name: "Dr. Sergio Rodriguez Valera",
        credential: "LV MRCVS GPCert (ExAP)",        
        role: "Exotic Pet Specialist",
        image: "placeholder-team-pic_small.jpg",
        specialties: "Birds, Reptiles, Small Mammals"
      },
      {
        name: "Chloe Pickering",
        credential: "RVN",
        role: "Head Veterinary Nurse",
        image: "placeholder-team-pic_small.jpg",
        specialties: "Emergency Care, Pet Nutrition"
      }
    ];
  </script>
  
  <section class="team-highlight">
    <div class="container">
      <div class="section-header">
        <h2>Meet Our Care Team</h2>
        <p>Experienced professionals who love animals as much as you do</p>
      </div>
      
      <div class="team-preview">
        {#each teamMembers as member, i}
          <div class="team-card">
            <!--<div class="member-image-container">-->
              <!--<div class="member-image-placeholder"> --> 
                <!--Placeholder for member image -->
                <!--<div class="image-initial">{member.name.charAt(0)}</div> --> 
                <!--<div class="profile-pic"> <img src={member.image} alt="Profile Picture"/> </div> 
              </div>-->
            <!--</div>--> 
            <div class="member-info">
              <h3>{member.name}</h3>
              <h4>{member.credential}</h4>
              <p class="member-role">{member.role}</p>
              <p class="member-specialty">Specialties: {member.specialties}</p>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="team-cta">
        <a href="/about-us" class="btn-team">Meet Our Entire Team</a>
      </div>
    </div>
  </section>
  
  <style>
    .team-highlight {
      padding: 4rem 1rem;
      background-color: white;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    h2 {
      font-size: 2.25rem;
      color: #1a3c6e;
      margin-bottom: 0.75rem;
    }
    
    .section-header p {
      font-size: 1.125rem;
      color: #4a5568;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .team-preview {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }
    
    .team-card {
      background-color: #f7fafc;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .team-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
    
    .member-image-container {
      height: 200px;
      overflow: hidden;
      background-color: #e6f5ff;
    }
    
    .member-image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #a6e3ff;
    }
    .image-initial {
      font-size: 4rem;
      color: white;
      font-weight: bold;
    }
    
    .profile-pic {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .member-info {
      padding: 1.5rem;
    }
    
    h3 {
      font-size: 1.25rem;
      color: #2c5282;
      margin-bottom: 0rem;
    }
     h4 {
      font-size: 1rem;
      color: #2c5282;
      margin-bottom: 0.5rem;
    }
    
    .member-role {
      color: #3182ce;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    
    .member-specialty {
      color: #4a5568;
      font-size: 0.875rem;
    }
    
    .team-cta {
      text-align: center;
      margin-top: 1rem;
    }
    
    .btn-team {
      display: inline-block;
      background-color: #3182ce;
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(49, 130, 206, 0.25);
    }
    
    .btn-team:hover {
      background-color: #2b6cb0;
      transform: translateY(-2px);
      box-shadow: 0 6px 8px rgba(49, 130, 206, 0.3);
    }
  </style>