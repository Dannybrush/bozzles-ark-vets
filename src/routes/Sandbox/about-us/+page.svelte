<script>
    import { fade, fly } from 'svelte/transition';
    import TeamMember from '$lib/components/About/TeamMember.svelte';
    import PageHeader from '$lib/components/About/PageHeader.svelte';
    import ValueCard from '$lib/components/About/ValueCard.svelte';
    
    // Team Members data
    const teamMembers = $state([
      {
        id: 1,
        name: "Dr. Sarah Wilson",
        role: "Lead Veterinarian",
        image: "/JJB.jpg", 
        credentials: "DVM, MRCVS",
        specialty: "Small Animal Medicine",
        bio: "Dr. Wilson founded Bozzles Ark Vets in 2010 with a vision to provide compassionate, comprehensive care for all pets. She has over 15 years of experience in veterinary medicine and is particularly passionate about preventative care and geriatric medicine."
      },
      {
        id: 2,
        name: "Dr. James Chen",
        role: "Veterinary Surgeon",
        image: "/images/team/james-chen.jpg",
        credentials: "BVSc, MRCVS",
        specialty: "Veterinary Surgery",
        bio: "Dr. Chen joined our practice in 2015, bringing his exceptional surgical skills to our team. He specializes in orthopedic and soft tissue surgeries, always ensuring the highest standards of care and comfort for our patients."
      },
      {
        id: 3,
        name: "Emma Roberts",
        role: "Head Veterinary Nurse",
        image: "/images/team/emma-roberts.jpg",
        credentials: "RVN",
        specialty: "Animal Nursing & Clinical Care",
        bio: "Emma has been with us since day one, helping to establish our practice's reputation for exceptional nursing care. Her calming presence is appreciated by both animals and their owners during stressful visits."
      },
      {
        id: 4,
        name: "Marcus Thompson",
        role: "Practice Manager",
        image: "/images/team/marcus-thompson.jpg",
        credentials: "MBA",
        specialty: "Veterinary Practice Management",
        bio: "Marcus ensures that all administrative aspects of Bozzles Ark Vets run smoothly so that our clinical team can focus on what they do best - providing exceptional care for your pets."
      }
    ]);
    
    // Practice values
    const values = $state([
      {
        title: "Compassionate Care",
        icon: "heart",
        description: "We treat every animal with gentleness, empathy and respect, understanding the special bond between pets and their owners."
      },
      {
        title: "Clinical Excellence",
        icon: "award",
        description: "We are committed to the highest standards of veterinary medicine, staying current with the latest advances in treatment and technology."
      },
      {
        title: "Clear Communication",
        icon: "message-circle",
        description: "We believe in transparent discussions about your pet's health, ensuring you understand all options for their care."
      },
      {
        title: "Community Focus",
        icon: "users",
        description: "We're proud to be part of the Barwell community, supporting local pet owners and animal welfare initiatives."
      }
    ]);
    
    let isVisible = $state(false);
    
    $effect(() => {
      // Simple animation trigger when page loads
      setTimeout(() => {
        isVisible = true;
      }, 300);
    });
  </script>
  
  <svelte:head>
    <title>About Us | Bozzles Ark Vets</title>
    <meta name="description" content="Learn about Bozzles Ark Vets' history, our compassionate team, and our commitment to exceptional veterinary care in Barwell.">
  </svelte:head>
  
  <PageHeader 
    title="About Bozzles Ark Vets" 
    subtitle="Compassionate care for all creatures great and small"
    backgroundImage="/images/about-header.jpg"
  />
  
  <main class="container mx-auto px-4 py-8">
    <!-- Our Story Section -->
    <section class="mb-16">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="order-2 md:order-1" in:fade={{ delay: 200, duration: 800 }}>
          <h2 class="text-3xl font-bold text-primary mb-4">Our Story</h2>
          <p class="text-text mb-4">
            Bozzles Ark Vets was established in 2010 by Dr. Sarah Wilson with a simple mission: to provide 
            the highest standard of veterinary care with compassion and understanding for both pets and their owners.
          </p>
          <p class="text-text mb-4">
            What began as a small practice has grown into a trusted veterinary center in Barwell, serving hundreds 
            of families and their beloved pets. Our name, inspired by the biblical tale of Noah's Ark, reflects our 
            commitment to caring for all creatures - from the smallest hamster to the largest dog.
          </p>
          <p class="text-text">
            Over the years, we've expanded our team and facilities, but our core values remain unchanged. 
            Every member of the Bozzles Ark family is committed to treating your pets with the same love and 
            care we would show our own.
          </p>
        </div>
        <div class="order-1 md:order-2">
          <img 
            src="/images/clinic-building.jpg" 
            alt="Bozzles Ark Vets Clinic Building" 
            class="rounded-lg shadow-lg w-full object-cover h-96"
            in:fly={{ y: 50, duration: 800, delay: 300 }}
          />
        </div>
      </div>
    </section>
  
    <!-- Our Mission Section -->
    <section class="mb-16 bg-background p-8 rounded-lg">
      <div class="text-center max-w-3xl mx-auto" in:fade={{ delay: 400, duration: 800 }}>
        <h2 class="text-3xl font-bold text-primary mb-4">Our Mission</h2>
        <p class="text-lg text-text mb-6">
          To provide exceptional veterinary care that enhances the quality of life for pets and strengthens 
          the special bond they share with their families.
        </p>
        <div class="border-l-4 border-secondary p-4 bg-white shadow-sm">
          <p class="italic text-text-light">
            "At Bozzles Ark Vets, we believe that every animal deserves compassionate, high-quality healthcare. 
            We are committed to treating each pet as an individual and working together with owners to make 
            the best decisions for their animal companions."
          </p>
          <p class="mt-2 font-semibold text-primary">— Dr. Sarah Wilson, Founder</p>
        </div>
      </div>
    </section>
  
    <!-- Our Values Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-primary mb-8 text-center">Our Values</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each values as value, i}
          <div in:fly={{ y: 30, duration: 600, delay: 500 + (i * 100) }}>
            <ValueCard {...value} />
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Our Team Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-primary mb-2 text-center">Meet Our Team</h2>
      <p class="text-text-light mb-8 text-center max-w-2xl mx-auto">
        Our dedicated team of veterinary professionals brings together years of experience, 
        specialized knowledge, and a shared passion for animal welfare.
      </p>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each teamMembers as member, i}
          <div in:fly={{ y: 30, duration: 600, delay: 600 + (i * 150) }}>
            <TeamMember {...member} />
          </div>
        {/each}
      </div>
      
      <div class="mt-12 text-center" in:fade={{ delay: 1200, duration: 800 }}>
        <p class="text-text-light mb-4">
          Our team also includes several veterinary assistants, receptionists, and animal care specialists 
          who all contribute to the exceptional experience at Bozzles Ark Vets.
        </p>
        <a href="/contact" class="btn btn-primary">Contact Our Team</a>
      </div>
    </section>
  
    <!-- Facilities Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-primary mb-8 text-center">Our Facilities</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="card" in:fly={{ y: 30, duration: 600, delay: 700 }}>
          <div class="card-header">
            <img src="/images/facilities/reception.jpg" alt="Reception area" class="w-full h-48 object-cover rounded-t-lg">
          </div>
          <div class="card-body">
            <h3 class="font-bold text-xl mb-2">Welcoming Reception</h3>
            <p>Our bright, spacious reception area is designed to make both pets and their owners feel comfortable from the moment they arrive.</p>
          </div>
        </div>
        
        <div class="card" in:fly={{ y: 30, duration: 600, delay: 800 }}>
          <div class="card-header">
            <img src="/images/facilities/exam-room.jpg" alt="Examination room" class="w-full h-48 object-cover rounded-t-lg">
          </div>
          <div class="card-body">
            <h3 class="font-bold text-xl mb-2">Modern Examination Rooms</h3>
            <p>Our examination rooms are equipped with the latest technology to provide thorough assessments in a stress-free environment.</p>
          </div>
        </div>
        
        <div class="card" in:fly={{ y: 30, duration: 600, delay: 900 }}>
          <div class="card-header">
            <img src="/images/facilities/surgery.jpg" alt="Surgical suite" class="w-full h-48 object-cover rounded-t-lg">
          </div>
          <div class="card-body">
            <h3 class="font-bold text-xl mb-2">State-of-the-art Surgery</h3>
            <p>Our surgical suite is equipped with advanced monitoring equipment and tools to ensure the safest possible procedures.</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Call to Action -->
    <section class="bg-primary text-white p-8 rounded-lg text-center" in:fade={{ delay: 1000, duration: 800 }}>
      <h2 class="text-2xl font-bold mb-4">Experience the Bozzles Ark Difference</h2>
      <p class="mb-6 max-w-2xl mx-auto">
        We'd love to welcome you and your pets to our practice. Whether you're looking for routine preventative care or 
        specialized treatment, our team is here to help.
      </p>
      <div class="flex justify-center flex-wrap gap-4">
        <a href="/appointments" class="btn btn-secondary">Book an Appointment</a>
        <a href="/contact" class="btn btn-outline-light">Contact Us</a>
      </div>
    </section>
  </main>