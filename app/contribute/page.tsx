"use client";

import { useState, type ChangeEvent } from "react";
import Link from "next/link";
import Cropper, { type Area } from "react-easy-crop";

type CropMode = "square" | "original";

const field =
  "w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none focus:border-[var(--pink)]";

function readImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read the image"));
    reader.readAsDataURL(file);
  });
}

function getImageSize(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = () => reject(new Error("Could not load the image"));
    img.src = src;
  });
}

export default function ContributePage() {
  const [source, setSource] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [originalAspect, setOriginalAspect] = useState(1);
  const [cropMode, setCropMode] = useState<CropMode>("square");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [cropped, setCropped] = useState<string | null>(null);
  const [cropError, setCropError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState("");
  const [bio, setBio] = useState("");
  const [social, setSocial] = useState("");
  const [price, setPrice] = useState("0.02");
  const [supply, setSupply] = useState("100");
  const [share, setShare] = useState(20);
  const [fameName, setFameName] = useState("");
  const [famePhoto, setFamePhoto] = useState<string | null>(null);
  const [fameConsent, setFameConsent] = useState(false);

  const aspect = cropMode === "square" ? 1 : originalAspect;
  const priceNumber = Number(price);
  const amount = Number.isFinite(priceNumber) && priceNumber > 0 ? priceNumber : 0;
  const validSupply = Number.isInteger(Number(supply)) && Number(supply) >= 1;
  const artistAmount = (amount * (100 - share)) / 100;
  const projectAmount = (amount * share) / 100;

  function resetCrop() {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
    setCropped(null);
    setCropError("");
  }

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 10 * 1024 * 1024) {
      setCropError("Please choose an image smaller than 10 MB.");
      event.target.value = "";
      return;
    }
    try {
      const data = await readImage(file);
      const size = await getImageSize(data);
      if (!size.width || !size.height) throw new Error("Invalid image size");
      setSource(data);
      setFileName(file.name);
      setOriginalAspect(size.width / size.height);
      resetCrop();
    } catch {
      setCropError("Could not open this image. Try a JPG or PNG.");
    }
    event.target.value = "";
  }

  async function exportCrop() {
    if (!source || !croppedAreaPixels) {
      setCropError("Please wait until the image is ready.");
      return;
    }
    try {
      const image = new window.Image();
      image.src = source;
      await image.decode();
      const { x, y, width, height } = croppedAreaPixels;
      const scale = Math.min(1, 1600 / Math.max(width, height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Canvas unavailable");
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, x, y, width, height, 0, 0, canvas.width, canvas.height);
      setCropped(canvas.toDataURL("image/png"));
      setCropError("");
    } catch {
      setCropError("Could not crop this image. Please try again.");
    }
  }

  async function uploadFamePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 2 * 1024 * 1024) {
      alert("Choose a photo or avatar smaller than 2 MB.");
      event.target.value = "";
      return;
    }
    try {
      setFamePhoto(await readImage(file));
    } catch {
      alert("Could not read the photo.");
    }
    event.target.value = "";
  }

  const livePreview = (
    <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5">
      <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[var(--pink)]">Live Preview</p>
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
        {cropped ? <img src={cropped} alt="Cropped artwork preview" className="h-full w-full object-contain" />
          : source ? <img src={source} alt="Artwork preview" className="h-full w-full object-contain" />
          : <span className="text-7xl text-[var(--purple)]">✦</span>}
      </div>
      <h3 className="mt-5 text-2xl font-bold">{title || "Your masterpiece"}</h3>
      <p className="mt-2 text-[var(--text-muted)]">by {artist || "Your artist name"}</p>
      <div className="mt-5 flex justify-between border-t border-[var(--border)] pt-5 text-sm">
        <span>{supply || "—"} editions</span><span className="font-bold text-[var(--cyan)]">{price || "0"} SOL</span>
      </div>
      {source && !cropped && <p className="mt-3 text-xs text-[var(--text-muted)]">Apply Crop to update the final artwork preview.</p>}
      {share === 100 && <p className="mt-4 text-sm text-[var(--pink)]">💗 Wall of Fame eligible after verified launch</p>}
    </div>
  );

  const artworkFields = (
    <div className="space-y-4">
      <input aria-label="Artwork title" className={field} placeholder="Artwork title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea aria-label="Artwork description" className={field} rows={4} placeholder="Tell the story behind your artwork..." value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
  );

  return (
    <main className="olimagine-page mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="olimagine-kicker">Community Launchpad</p>
      <h1 className="mt-5 text-5xl font-bold md:text-7xl">
        Create Your <span className="text-[var(--yellow)]">Drop.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-[var(--text-soft)]">
        Your art. Your story. A bigger universe. Create a collection and choose how much of each mint supports Olimagine.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
            <h2 className="mb-6 text-2xl font-bold"><span className="text-[var(--pink)]">01.</span> Your Artwork</h2>
            <label className="block cursor-pointer rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] p-7 text-center hover:border-[var(--cyan)]">
              <span className="text-4xl text-[var(--yellow)]">✦</span>
              <p className="mt-2 font-semibold">Choose artwork</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">Image up to 10 MB {fileName && `· ${fileName}`}</p>
              <input type="file" accept="image/*" onChange={upload} className="hidden" />
            </label>

            {source && (
              <div className="mt-5 space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <h3 className="font-semibold text-[var(--cyan)]">Position & Crop</h3>
                <div className="flex flex-wrap gap-2">
                  {(["square", "original"] as CropMode[]).map((mode) => (
                    <button key={mode} type="button" onClick={() => { setCropMode(mode); resetCrop(); }}
                      className={`rounded-full border px-4 py-2 text-sm ${cropMode === mode ? "border-[var(--yellow)] text-[var(--yellow)]" : "border-[var(--border)]"}`}>
                      {mode === "square" ? "Square 1:1" : "Original ratio"}
                    </button>
                  ))}
                </div>
                <div className="relative mx-auto h-[340px] w-full max-w-sm overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-soft)]">
                  <Cropper
                    image={source}
                    crop={crop}
                    zoom={zoom}
                    aspect={aspect}
                    objectFit="contain"
                    showGrid
                    onCropChange={(position) => { setCrop(position); setCropped(null); }}
                    onZoomChange={(value) => { setZoom(value); setCropped(null); }}
                    onCropComplete={(_, pixels) => { setCroppedAreaPixels(pixels); }}
                  />
                </div>
                <label className="block text-sm">
                  Zoom · {zoom.toFixed(1)}×
                  <input aria-label="Zoom" className="mt-2 w-full accent-[var(--yellow)]" type="range" min="1" max="3" step="0.1"
                    value={zoom} onChange={(e) => { setZoom(Number(e.target.value)); setCropped(null); }} />
                </label>
                <p className="text-center text-xs text-[var(--text-muted)]">Drag the image to reposition it. Pinch or use the slider to zoom.</p>
                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={exportCrop} className="rounded-full bg-[var(--yellow)] px-5 py-2 font-bold text-[var(--primary-foreground)]">Apply Crop</button>
                  <button type="button" onClick={resetCrop} className="rounded-full border border-[var(--border)] px-5 py-2">Reset</button>
                </div>
                {cropped && <p className="text-sm text-[var(--green)]">✓ Crop applied to Live Preview.</p>}
              </div>
            )}
            {cropError && <p role="alert" className="mt-3 text-sm text-[var(--pink)]">{cropError}</p>}
            <div className="mt-6 hidden lg:block">{artworkFields}</div>
          </section>

          {/* On phones/tablets: crop -> preview -> title and description */}
          <div className="lg:hidden" aria-label="Mobile artwork live preview">{livePreview}</div>
          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6 lg:hidden">
            {artworkFields}
          </div>

          <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
            <h2 className="mb-6 text-2xl font-bold"><span className="text-[var(--cyan)]">02.</span> Meet the Artist</h2>
            <div className="space-y-4">
              <input aria-label="Artist name" className={field} placeholder="Artist name or nickname" value={artist} onChange={(e) => setArtist(e.target.value)} />
              <textarea aria-label="Artist biography" className={field} rows={3} placeholder="Short artist bio (optional)" value={bio} onChange={(e) => setBio(e.target.value)} />
              <input aria-label="Social profile" className={field} placeholder="X or Instagram URL (optional)" value={social} onChange={(e) => setSocial(e.target.value)} />
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)]">Wallet connection will be required when on-chain creation is enabled.</p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
            <h2 className="mb-6 text-2xl font-bold"><span className="text-[var(--green)]">03.</span> Your Collection</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">Mint price (SOL)
                <input className={`${field} mt-2`} type="number" min="0.001" step="0.001" value={price} onChange={(e) => setPrice(e.target.value)} />
              </label>
              <label className="text-sm">Editions
                <input className={`${field} mt-2`} type="number" min="1" step="1" value={supply} onChange={(e) => setSupply(e.target.value)} />
              </label>
            </div>
            {!validSupply && <p className="mt-2 text-sm text-[var(--pink)]">Supply must be a positive whole number.</p>}
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-[var(--surface-soft)] p-6">
            <h2 className="mb-6 text-2xl font-bold"><span className="text-[var(--yellow)]">04.</span> Share the Magic</h2>
            <div className="flex justify-between font-semibold"><span>Olimagine share</span><span className="text-[var(--yellow)]">{share}%</span></div>
            <input aria-label="Olimagine share" className="mt-5 w-full accent-[var(--yellow)]" type="range" min="20" max="100" step="5" value={share}
              onChange={(e) => { const next = Number(e.target.value); setShare(next); if (next !== 100) setFameConsent(false); }} />
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-[var(--surface)] p-4"><p className="text-[var(--text-muted)]">Artist per mint</p><p className="mt-2 text-xl font-bold text-[var(--cyan)]">{artistAmount.toFixed(4)} SOL</p></div>
              <div className="rounded-2xl bg-[var(--surface)] p-4"><p className="text-[var(--text-muted)]">Olimagine per mint</p><p className="mt-2 text-xl font-bold text-[var(--yellow)]">{projectAmount.toFixed(4)} SOL</p></div>
            </div>
            <p className="mt-4 text-xs text-[var(--text-muted)]">Illustrative amounts before fees. Secure on-chain distribution is not connected yet.</p>
            {share === 100 && (
              <div className="mt-7 rounded-2xl border border-[var(--pink)] bg-[var(--surface)] p-5 text-center">
                <div className="text-3xl motion-safe:animate-bounce" aria-hidden="true">💗 💛 💜 💗</div>
                <h3 className="mt-3 text-xl font-bold text-[var(--yellow)]">You&apos;re a star in our universe!</h3>
                <p className="mt-2 text-sm text-[var(--text-soft)]">After your 100% Olimagine drop is verified, you can join the Wall of Fame.</p>
                <div className="mt-5 space-y-3 text-left">
                  <input aria-label="Wall of Fame name" className={field} placeholder="Name or nickname for Wall of Fame" value={fameName} onChange={(e) => setFameName(e.target.value)} />
                  <label className="block rounded-xl border border-dashed border-[var(--border)] p-3 text-sm">Upload a photo or avatar (optional, max 2 MB)
                    <input className="mt-2 block w-full text-xs" type="file" accept="image/*" onChange={uploadFamePhoto} />
                  </label>
                  {famePhoto && <img src={famePhoto} alt="Wall of Fame avatar preview" className="h-20 w-20 rounded-full object-cover" />}
                  <label className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
                    <input type="checkbox" checked={fameConsent} onChange={(e) => setFameConsent(e.target.checked)} className="mt-1" />
                    I agree to display my chosen name, photo (if provided), and artwork link publicly on Wall of Fame.
                  </label>
                </div>
                <p className="mt-3 text-xs text-[var(--text-muted)]">Preview only. No profile is published yet. Artwork links will be generated after verified NFT creation.</p>
                <Link href="/wall-of-fame" className="mt-4 inline-block text-sm font-semibold text-[var(--cyan)] underline">Explore Wall of Fame</Link>
              </div>
            )}
          </section>

          <button type="button" disabled className="w-full cursor-not-allowed rounded-full bg-[var(--yellow)] px-8 py-4 font-bold text-[var(--primary-foreground)] opacity-60">
            Create Drop — On-chain integration coming soon
          </button>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">{livePreview}</div>
        </aside>
      </div>
    </main>
  );
}
