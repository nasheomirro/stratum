<script>
  import { app } from "$lib/app.svelte";
  import PersonIcon from "~icons/material-symbols/person";
  import BookIcon from "~icons/material-symbols/book-4-spark";
  import CloseIcon from "~icons/material-symbols/close";
  import RocketIcon from "~icons/material-symbols/rocket-launch-rounded";
  import MenuIcon from "~icons/material-symbols/menu";

  import sampleImg from "./assets/sample.jpg";
</script>

<div class="space-y-10">
  <div class="px-4 py-5 filled-surface-100-900 flex items-center justify-between">
    <RocketIcon class="text-xl" />

    <button class="btn-icon hover:filled-surface-100-900 lg:hidden">
      <MenuIcon />
    </button>

    <div class="space-x-2 hidden lg:block">
      <button class="btn hover:filled-surface-300-700">About</button>
      <button class="btn hover:filled-surface-300-700">Careers</button>
      <button class="btn hover:filled-surface-300-700">Blog</button>
      <button class="btn filled-{app.activeColor}-700-300">Contact</button>
    </div>
  </div>

  <div class="grid xl:grid-cols-3 items-start gap-7">
    <div class="space-y-7">
      <div class="space-x-1">
        <button class="btn filled-{app.activeColor}-200-800">Button</button>
        <button class="btn filled-surface-950-50">Button</button>
        <button class="btn filled-{app.activeColor}-500">Button</button>
      </div>

      <div>
        <div class="flex items-center gap-4">
          <button class="base:btn-icon p-3.5 rounded-full flex items-center justify-center filled-{app.activeColor}-500">
            <PersonIcon />
          </button>
          <button class="base:btn-icon p-3.5 rounded-full flex items-center justify-center filled-{app.activeColor}-200-800">
            <PersonIcon />
          </button>
          <button
            class="base:btn-icon p-3.5 rounded-full flex items-center justify-center border border-{app.activeColor}-200-800 text-contrast-{app.activeColor}-200-800"
          >
            <PersonIcon />
          </button>
          <div class="base:btn-icon-static p-3.5 rounded-full flex items-center justify-center filled-surface-950-50">PH</div>
          <div class="base:btn-icon-static p-3.5 rounded-full flex items-center justify-center filled-{app.activeColor}-500">SR</div>
        </div>
      </div>

      <div class="border border-surface-100-900 rounded-lg p-2 flex justify-between items-center">
        <button class="btn filled-{app.activeColor}-300-700">Home</button>
        <button class="btn hover:filled-surface-300-700">About</button>
        <button class="btn hover:filled-surface-300-700">Contact</button>
      </div>

      <div class="space-y-4 py-4 px-4 border-surface-100-900 rounded-lg border">
        <div class="hd-4 flex items-center gap-2">
          <div class="base:badge-icon rounded-full inline-flex items-center justify-center filled-{app.activeColor}-500">
            <PersonIcon />
          </div>
          Natalie
        </div>
        <div class="w-7/8 p-3 rounded-xl rounded-bl-none filled-surface-100-900">
          Hey how long were you awake for? I think it might be time to rest for the night.
        </div>
        <div class="w-7/8 ml-auto p-3 rounded-xl rounded-br-none filled-{app.activeColor}-300-700">Nah, I'd win.</div>
      </div>
    </div>

    <div class="space-y-7">
      <div class="rounded-lg shadow p-4 md:p-8 filled-surface-100-900">
        <h2 class="hd-2 mb-2">Newsletter</h2>
        <p>Get the latest news and updates by signing below!</p>
        <form class="py-4 space-y-4">
          <input class="input" placeholder="email@example.com" />
          <button class="btn filled-{app.activeColor}-300-700 ml-auto block w-fit">signup</button>
        </form>
      </div>

      <div class="rounded-lg relative shadow p-4 md:p-6 border border-{app.activeColor}-200-800 filled-{app.activeColor}-100-900">
        <button class="absolute top-4 right-4 text-lg">
          <CloseIcon />
        </button>
        <h3 class="hd-3 mb-2">Title!</h3>
        <p>Insert something important enough to make a notification for the user.</p>
      </div>
    </div>

    <div class="space-y-7">
      <div class="filled-surface-100-900 border border-surface-100-900 items-center shadow rounded-lg overflow-hidden">
        <img src={sampleImg} alt="" class="object-cover w-full" />
        <div class="p-6">
          <p class="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius autem et mollitia velit accusamus ipsum, quos eum molestiae
            voluptates!
          </p>
          <div class="ml-auto w-fit">
            <button class="btn filled-{app.activeColor}-100-900"><BookIcon /> Read more</button>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-7">
      <div class="border border-surface-100-900 rounded-xl p-4 space-y-4">
        <div class="flex gap-2 items-center">
          <div class="base:badge-icon badge-icon-lg rounded-full filled-{app.activeColor}-500">
            <PersonIcon />
          </div>
          <span class="font-bold">Aeji</span>
        </div>

        <p>Anyone else obsessed with a certain arcade rhythm game?</p>
        <div class="text-right text-xs text-surface-600-400">5 hours ago</div>
      </div>
    </div>

    <div class="space-y-7">
      <div class="space-y-4">
        <div class="border-b border-surface-100-900 p-2 pb-3 flex justify-between items-center">
          <button class="btn hover:filled-surface-300-700">Home</button>
          <button class="btn hover:filled-surface-300-700">About</button>
          <button class="btn hover:filled-surface-300-700">Contact</button>
        </div>
      </div>
    </div>

    <div class="space-y-7">
      <div class="space-y-5 p-4 border border-surface-100-900 rounded">
        <div class="w-12 h-12 bg-surface-300-700 rounded-full"></div>
        <div class="h-2 rounded-xl bg-surface-300-700"></div>
        <div class="h-2 rounded-xl bg-surface-300-700"></div>
        <div class="h-2 rounded-xl bg-surface-300-700 w-1/2"></div>
        <div class="h-2 rounded-xl bg-surface-300-700 w-1/4 ml-auto"></div>
      </div>
    </div>
  </div>

  <div class="flex gap-1 lg:gap-2">
    <div class="h-1 w-full bg-{app.activeColor}-950"></div>
    <div class="h-1 w-full bg-{app.activeColor}-900"></div>
    <div class="h-1 w-full bg-{app.activeColor}-800"></div>
    <div class="h-1 w-full bg-{app.activeColor}-700"></div>
    <div class="h-1 w-full bg-{app.activeColor}-600"></div>
    <div class="h-1 w-full bg-{app.activeColor}-500"></div>
    <div class="h-1 w-full bg-{app.activeColor}-400"></div>
    <div class="h-1 w-full bg-{app.activeColor}-300"></div>
    <div class="h-1 w-full bg-{app.activeColor}-200"></div>
    <div class="h-1 w-full bg-{app.activeColor}-100"></div>
    <div class="h-1 w-full bg-{app.activeColor}-50"></div>
  </div>
</div>
