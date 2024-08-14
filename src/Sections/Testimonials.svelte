<script>
  import Container from "../Elements/Container.svelte";

  const testimonials = [
    {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=17",
      review: "Absolutely fantastic service! The attention to detail and quality of work exceeded my expectations. Highly recommend for any handyman needs."
    },
    {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/150?img=18",
      review: "Professional, reliable, and efficient. The handyman was courteous and completed the job on time. I couldn't be happier with the results."
    },
    {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=19",
      review: "Top-notch service! The handyman was knowledgeable and skilled. He fixed everything perfectly and even provided helpful maintenance tips. Will definitely hire again."
    }
  ];
</script>

<Container>
  <div id="testimonials"/>
  <div class="bg-[var(--background)] text-[var(--foreground)] py-12 mb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-8 mt-8">Testimonials</h2>
      <div class="flex flex-wrap gap-8 w-full center-h flex-center">
        {#each testimonials as testimonial}
        <div class="flex flex-col items-center w-300">
          <div class="w-150 h-150">
            <img src={testimonial.avatar} alt="{testimonial.name} avatar" class="w-full h-full object-cover mb-4 rounded-full" />
          </div>
          <h3 class="text-xl font-semibold mb-0">{testimonial.name}</h3>
          <p class="text-center">{testimonial.review}</p>
        </div>
        {/each}
      </div>
    </div>
  </div>
</Container>

<style>
#testimonials {
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

.h-150 {
  height: 150px;
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

.rounded-full {
  border-radius: 50%;
}
</style>
