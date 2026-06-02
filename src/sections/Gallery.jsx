import networkRack from "../assets/images/gallery/network-rack.jpg";
import cctvInstall from "../assets/images/gallery/cctv-install.jpg";
import mikrotik from "../assets/images/gallery/mikrotik.jpg";
import hardwareRepair from "../assets/images/gallery/hardware-repair.jpg";
import cableManagement from "../assets/images/gallery/cable-management.jpg";
import itSupport from "../assets/images/gallery/it-support.jpg";

const galleryImages = [
  {
    image: networkRack,
    title: "Network Rack Setup",
  },
  {
    image: cctvInstall,
    title: "CCTV Installation",
  },
  {
    image: mikrotik,
    title: "MikroTik Configuration",
  },
  {
    image: hardwareRepair,
    title: "Hardware Troubleshooting",
  },
  {
    image: cableManagement,
    title: "Cable Management",
  },
  {
    image: itSupport,
    title: "IT Support",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Work Gallery
        </h2>

        <p className="text-slate-500 mt-4">
          Some of my practical IT & Networking works
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="
            group
            overflow-hidden
            rounded-2xl
            border border-slate-700
            relative
            hover:border-blue-500
            duration-300
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
              w-full
              h-64
              object-cover
              group-hover:scale-110
              duration-500
              "
            />

            <div
              className="
              absolute inset-0
              bg-black/60
              opacity-0
              group-hover:opacity-100
              duration-300
              flex items-center justify-center
              "
            >
              <h3 className="text-white text-xl font-semibold text-center px-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;