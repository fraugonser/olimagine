import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-white/15 bg-[#0d0912] px-6">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between">

        <a href="/" className="flex items-center gap-3">
          <div className="group relative flex h-16 w-16 items-center justify-center">
  <div className="absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.65)_0%,rgba(59,130,246,0.30)_45%,transparent_72%)] transition-all duration-300 group-hover:scale-125" />

 <div className="earth-spin relative z-10">
  <Image
    src="/brand/earth-logo.png"
    alt=""
    width={64}
    height={64}
    className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
  />
</div>
</div>
<Image
  src="/brand/olimagine-logo.png"
  alt="Olimagine"
  width={300}
  height={100}
  className="h-auto w-52 object-contain"
/>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
  <a
  href="/gallery"
  className="group relative py-2 transition-all duration-300 hover:scale-105 hover:text-pink-200"
>
    Gallery
    <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-pink-400 transition-all duration-300 group-hover:w-full" />
  </a>

  <a
  href="/fan-art"
  className="group relative py-2 transition-all duration-300 hover:scale-105 hover:text-yellow-200"
>
    Fan Art
    <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-yellow-300 transition-all duration-300 group-hover:w-full" />
  </a>

  <a
  href="/contributed-art"
  className="group relative py-2 transition-all duration-300 hover:scale-105 hover:text-green-200"
>
    Contributed Art
    <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-green-400 transition-all duration-300 group-hover:w-full" />
  </a>

  <a
  href="#roadmap"
  className="group relative py-2 transition-all duration-300 hover:scale-105 hover:text-purple-200"
>
    Roadmap
    <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-purple-400 transition-all duration-300 group-hover:w-full" />
  </a>
</nav>
        <div className="group relative">

{/* doodle rays */}

{/* left */}
<span className="absolute -left-5 top-1/2 h-[2px] w-2 -translate-y-1/2 bg-yellow-300 transition-all duration-300 group-hover:-translate-x-0.5" />

{/* right */}
<span className="absolute -right-5 top-1/2 h-[2px] w-2 -translate-y-1/2 bg-yellow-300 transition-all duration-300 group-hover:translate-x-0.5" />

{/* top left */}
<span className="absolute -top-4 left-1/4 h-2 w-[2px] -rotate-[25deg] bg-yellow-300 transition-all duration-300 group-hover:-translate-y-0.5" />

{/* top right */}
<span className="absolute -top-4 right-1/4 h-2 w-[2px] rotate-[25deg] bg-yellow-300 transition-all duration-300 group-hover:-translate-y-0.5" />

{/* bottom left */}
<span className="absolute -bottom-4 left-1/4 h-2 w-[2px] rotate-[25deg] bg-yellow-300 transition-all duration-300 group-hover:translate-y-0.5" />

{/* bottom right */}
<span className="absolute -bottom-4 right-1/4 h-2 w-[2px] -rotate-[25deg] bg-yellow-300 transition-all duration-300 group-hover:translate-y-0.5" />
  <button
    className="
      relative
      rounded-2xl
      border-2 border-yellow-200
      bg-yellow-300
      px-6 py-3
      font-semibold text-black
      shadow-[0_0_18px_rgba(253,224,71,0.25)]
      transition-all duration-300
      group-hover:scale-105
      group-hover:bg-yellow-200
      group-hover:shadow-[0_0_28px_rgba(253,224,71,0.55)]
    "
  >
    Connect Wallet
  </button>

</div>
      </div>
    </header>
  );
}