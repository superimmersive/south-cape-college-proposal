import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { collegeValue } from "@/content/proposal";
import { withBase } from "@/lib/base-path";

export function Value() {
  return (
    <Section
      eyebrow="Mutual value"
      title="Value to South Cape College"
      lede={
        <p>
          The collaboration is structured so that the College gains capability,
          visibility and student opportunity alongside the training tools
          themselves.
        </p>
      }
    >
      <ul className="grid gap-px overflow-hidden rounded-xl border border-hair bg-hair md:grid-cols-2 lg:grid-cols-3">
        {collegeValue.map((item, index) => (
          <Reveal
            as="li"
            key={item.title}
            delay={index * 80}
            className="group relative flex min-h-[16rem] flex-col overflow-hidden bg-ink p-7"
          >
            {item.image && (
              <>
                <img
                  src={withBase(item.image)}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                    item.imageBrightness === 0.45
                      ? "brightness-[0.45]"
                      : item.imageBrightness === 0.8
                        ? "brightness-[0.80]"
                        : "brightness-[0.90]"
                  }`}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(5,6,10,0.72) 0%, rgba(5,6,10,0.55) 42%, rgba(5,6,10,0.82) 100%)",
                  }}
                />
              </>
            )}
            <span className="label relative z-10 text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="h3 relative z-10 mt-5">{item.title}</h3>
            <p className="body-text relative z-10 mt-3.5 text-[0.95rem]">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
