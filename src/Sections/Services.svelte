<script>
  import Container from "../Elements/Container.svelte";
  import { navigateTo } from "../router.js"

  const services = [
    {
        img: "/images/services/appliance.jpg",
      title: "Appliance Repair",
      description: "If you have any appliances that need to be repaired, We can help you with that. We can handle various types of appliances, such as refrigerators, ovens, dishwashers, and more."
    },
    {
      img: "/images/services/paint2.webp",
      title: "Painting",
      description: "Whether you need a fresh coat of paint for your walls, ceilings, or cabinets, We can help you achieve the look you want. We can handle both interior and exterior painting projects."
    },
    {
      img: "/images/services/landscaping.webp",
      title: "Landscaping",
      description: "If you want to improve the appearance and functionality of your outdoor space, We can assist you with various landscaping tasks. We can mow your lawn, trim your hedges, plant flowers, and more."
    },
    {
      img: "/images/services/drywall.webp",
      title: "Drywall repair",
      description: "If you have any cracks, holes, or water damage on your drywall, We can fix them for you. We can patch, tape, sand, and paint your drywall to make it look as good as new."
    },
    {
      img: "/images/services/furniture.webp",
      title: "Furniture assembly",
      description: "If you have any furniture that needs to be assembled or disassembled, We can do it for you. We can work with different types of furniture, such as beds, sofas, tables, chairs, shelves, and more.",
      slug: "furniture-assembly"
    },
    {
      img: "/images/services/doors.webp",
      title: "Doors and Windows",
      description: "If you need to install, repair, or replace doors and windows, We can help you with that. We can handle different types of doors and windows, ensuring they are properly fitted and functional."
    },
    {
      img: "/images/services/woodwork.webp",
      title: "Woodworking",
      description: "If you need custom woodworking services, We can create and repair wooden structures and furniture. We can work on cabinets, shelves, decks, and more to meet your specific needs.",
      slug: "woodworking"
    },
    {
      img: "/images/services/propertywatch.webp",
      title: "Property Watch",
      description: "If you need someone to keep an eye on your property while you are away, We can provide property watch services. We can perform regular checks, maintenance, and ensure your property remains secure.",
      slug: "property-watch"
    }
  ];
</script>

<Container>
  <div id="services"/>
  <div class="bg-[var(--background)] py-12 mb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8 mt-8">Handyman Services in Northwest Arkansas</h2>
      <div class="flex flex-wrap gap-8 w-full center-h flex-center">
        {#each services as service}
        <div class="flex flex-col items-center w-300">
          <div class="w-300 h-200">
            <img src={service.img} alt="{service.title} service in NWA" class="w-full h-full object-cover mb-4" />
          </div>
          <h3 class="text-xl font-semibold mb-0">
            {#if service.slug}
              <a class="text-xl font-semibold mb-0" 
                 href="/service-detail/{service.slug}" 
                 on:click={(e) => {
                   e.preventDefault();
                   navigateTo(`/service-detail/${service.slug}`);
                 }}
              >{service.title}</a>
            {:else}
              {service.title}
            {/if}
          </h3>
          <p class="text-center">{service.description}</p>
        </div>
        {/each}
      </div>
    </div>
  </div>
</Container>

<style>
#services {
  scroll-margin-top: 24px;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-center {
  justify-items: center;
  justify-content: center;
}

.gap-8 {
  gap: 2rem;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.w-300 {
  width: 300px;
}

.h-200 {
  height: 200px;
}

.object-cover {
  object-fit: cover;
}

.mb-0 {
  margin-bottom: 0;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-xl {
  font-size: 1.25rem; /* 20px */
}

.font-semibold {
  font-weight: 600;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.text-center {
  text-align: center;
}

h2 {
  color: var(--header-color);
  font-size: 2.5em;
  margin-bottom: 1em;
}

a {
  font-family: 'Header', 'Times New Roman', Times, serif;
}
</style>