import useSWR from "swr";
import { SiSpotify } from "react-icons/si";
import { RiPauseCircleFill } from "react-icons/ri";
import Image from "next/image";

function Footer() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/spotify", fetcher);
  const today = new Date();

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div data-testid="footer" className="mt-40 mb-4">
      <a
        target="_blank"
        rel="noreferrer"
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/fasfashan?si=c347284baa8b4ea1"
        }
        className="relative flex mx-auto mb-4 items-start px-6 py-4 space-x-4 transition-shadow border border-gray-500 rounded-md hover:shadow-lg hover:shadow-sky-500/50 w-full md:w-80"
      >
        <div>
          {data?.isPlaying ? (
            <Image
              className="w-20 rounded-md shadow-sm"
              src={data?.albumImageUrl}
              alt={data?.album}
              width={80}
              height={80}
            />
          ) : (
            <SiSpotify size={60} color={"#1ED760"} />
          )}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between">
            <p>
              {data?.isPlaying ? (
                <RiPauseCircleFill className="text-white" size={24} />
              ) : (
                ""
              )}
            </p>
            <p>
              {data?.isPlaying ? <SiSpotify size={20} color={"#1ED760"} /> : ""}
            </p>
          </div>
          <div>
            <p className="font-bold text-white">
              {data?.isPlaying ? data.title : "Not Listening"}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {data?.isPlaying ? data.artist : "Spotify"}
            </p>
          </div>
        </div>
      </a>
      <p className="text-slate-500 text-sm text-center">
        {" "}
        © {today.getFullYear()} Fasha Fadillah
      </p>
    </div>
  );
}

export default Footer;
