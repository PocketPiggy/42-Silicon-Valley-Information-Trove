import Head from "next/head";
import GoBack from "../../components/GoBack";
import Button from "react-bootstrap/Button";

export default function Dorms() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Townhalls</title>
        <meta
          name="description"
          content="42 Silicon Valley has town halls for current students. Here is a list
          of the pubicly known ones, covering both videos and Github notes."
        />
        <link rel="canonical" href="https://42sv.info/sources/townhalls" />
      </Head>

      <section className="scroll-block" id="block-1">
        <h1>Townhall meetings</h1>

        <p>
          Before Covid, 42SV used to have townhalls for all the students every
          month or so, where the students could bring up questions and concerns
          and receive some answers. The Bocal have compiled some of those into
          notes hosted on Github for the public. Since the current (at this time
          of writing) pandemic, they have resorted to virtual townhalls instead.
          Reading and listening through these made it more clear about the day
          to day experiences of cadets, both positive and negative.
          Unfortunately, the last town hall was June 12th, 2020 and there hasn't
          been another public one at least, since.
        </p>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>Github Townhall notes</h3>
        <p>
          This has information going back from July 2019 up until January 2020.
          It's where I got a lot of information about some general things, like
          the 24 hour day in the Piscine and the guy who made it.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/townhall/townhall-gh.png"
            alt="Screencap of the last github notes of 42 Silicon valley town hall."
          />
        </span>
        <a
          href="https://github.com/evandjohnston/42sv_townhall_notes"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className="btn-next">
            Source
          </Button>
        </a>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>Virtual Town halls of 2020</h3>
        <p>
          These are the only two town halls that I could find, the one in April
          being unlisted took a lot of Google searching for. The June 12th
          stream was the last public one that I could find. All my previous
          contacts at 42 no longer attend and have since moved back home or
          moved on from the school since the pandemic.
        </p>
        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/86kkvx05ZUY"
            frameBorder="1"
            className="yt-iframe"
            allowFullScreen
          ></iframe>
        </span>
        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/5qQnQqnK4ZE"
            frameBorder="1"
            className="yt-iframe"
            allowFullScreen
          ></iframe>
        </span>
      </section>

      <section className="block">
        <GoBack name={"Sources"} />
      </section>

      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      scroll: [
        { stop: "1", title: "Townhall meetings" },
        { stop: "2", title: "Github townhall notes" },
        { stop: "3", title: "Virtual town halls of 2020" },
      ],
    },
  };
}
