#set text(12pt, font: "SF Pro Rounded")

#let monospaced(cnt, size: 1em, weight: 400) = {
  text(size: size, font: "M Plus 1 Code", weight: weight)[#cnt]
}

#align(center, text(2em, weight: 600)[Bruno Roque])
#v(-1.6em)
#align(center, monospaced(size: 1.3em)[Software Engineer])

#let section(title) = {
  v(-0.4em)
  monospaced(size: 1.2em, weight: 500)[#title]
  v(-0.9em)
  line(length: 100%, stroke: 0.1em)
  v(-0.6em)
}

#section[Info]

#let linki(ref, disp) = {
  link(ref)[#disp #text("↗")]
}

#let info(img, disp, ref: none) = {
  let cell = [#box(baseline: 20%, image("icons/" + img, height: 1.2em)); #h(
      0.2em,
    ); #disp]
  if ref != none {
    cell = linki(ref, cell)
  }
  grid.cell(cell)
}
#grid(
  columns: (50%, 50%),
  row-gutter: 0.3em,
  info("location.svg", "Zürich, Switzerland"),
  info("mobile.svg", "(+41) 765 174 226", ref: "tel:+41-765-174-226"),

  info(
    "email.svg",
    "brunroque06@gmail.com",
    ref: "mailto:brunoroque06@gmail.com",
  ),
  info(
    "website.svg",
    "brunoroque06.github.io",
    ref: "https://brunoroque06.github.io",
  ),

  info(
    "github.svg",
    "github.com/brunoroque06",
    ref: "https://github.com/brunoroque06",
  ),
  info(
    "linkedin.svg",
    "linkedin.com/in/brunoroque06",
    ref: "https://linkedin.com/in/brunoroque06",
  ),
)

#section[Experience]

#let dateStr(date) = {
  if (date == none) {
    return "Present"
  }
  date.display("[year].[month]")
}

#let period(cnt) = {
  monospaced(size: 0.9em)[#cnt]
}

#let calcDuration(start, end) = {
  if (end == none) {
    return []
  }
  let yrs = end.year() - start.year()
  let mos = end.month() - start.month()
  if mos < 0 {
    yrs -= 1
    mos += 12
  }
  mos += 1
  let toStr(n, unit) = if n == 1 [#n #unit] else if n > 1 [#n #(unit)s] else []
  let yrsStr = toStr(yrs, "yr")
  let mosStr = toStr(mos, "mo")
  let sep = if yrs > 0 and mos > 0 [, ] else []
  [(#yrsStr#sep#mosStr) ]
}

#let stage(
  title,
  entity,
  city,
  country,
  start,
  end,
  entityRef: none,
  duration: true,
  desc: none,
) = {
  text(1.2em, weight: 600)[#title]
  linebreak()
  let place = [#entity - #city, #country]
  if (entityRef != none) {
    place = linki(entityRef, place)
  }
  place
  h(1fr)
  let span = [#dateStr(start) - #dateStr(end)]
  if duration == true {
    span = [#calcDuration(start, end)#span]
  }
  period[#span]
  if (desc != none) {
    v(-0.4em)
    par(justify: true)[#desc]
  }
}

#let exps = (
  (
    title: "Senior Full Stack Engineer",
    entity: "Axpo",
    city: "Baden",
    country: "Switzerland",
    start: datetime(year: 2023, month: 3, day: 1),
    end: none,
    desc: "...",
  ),
  (
    title: "Senior Software Developer",
    entity: "Raccoon Works",
    city: "Zürich",
    country: "Switzerland",
    start: datetime(year: 2019, month: 6, day: 1),
    end: datetime(year: 2022, month: 12, day: 1),
    desc: "Development of an analytics system for time-series data. It enabled the correlation of events across machines in production lines. Tech: C#, Python, PostgreSQL, Angular, Bazel, Docker, Azure DevOps, Azure, Pulumi.",
  ),
  (
    title: "Software Developer",
    entity: "Spoud",
    city: "Bern",
    country: "Switzerland",
    start: datetime(year: 2017, month: 11, day: 1),
    end: datetime(year: 2019, month: 5, day: 1),
    desc: "Development of a real-time transport layer, and of analytics pipelines, where I introduced testing. Tech: Java, Apache Flink, Apache Kafka, Elasticsearch, gRPC, Bazel, Docker.",
  ),
  (
    title: "Software Engineer",
    entity: "Celfinet (Vodafone)",
    city: "Glasgow",
    country: "Scotland",
    start: datetime(year: 2017, month: 4, day: 1),
    end: datetime(year: 2017, month: 8, day: 1),
    desc: "Development of a desktop application to automate the planning of neighbors in cellular networks. Improved the drop call rate in northern areas of the UK by 30%. Tech: C#, WPF, MS SQL.".trim(
      regex(" Tech:(.*)"),
    ),
  ),
  (
    title: "Software Engineer R&D",
    entity: "Celfinet",
    city: "Lisbon",
    country: "Portugal",
    start: datetime(year: 2015, month: 10, day: 1),
    end: datetime(year: 2017, month: 3, day: 1),
    desc: "Research of geolocation in mobile and IoT networks using radio frequency propagation models. Improved the geolocation error from 280 to 130 meter. Tech: C#, Matlab.",
  ),
  (
    title: "Software Engineer R&D",
    entity: "Instituto Telecomunicações",
    city: "Lisbon",
    country: "Portugal",
    start: datetime(year: 2015, month: 1, day: 1),
    end: datetime(year: 2015, month: 9, day: 1),
    desc: "Software development of video processing algorithms: detection of black frames, black margins, flashes, block effect, removal of subtitles and inpaint. Tech: C++, OpenCV, Matlab.",
  ),
)

#for e in exps.slice(0, 4) {
  stage(e.title, e.entity, e.city, e.country, e.start, e.end, desc: e.desc)
}

#section[Education]
#stage(
  "MSc in Electrical and Computer Engineering",
  "Instituto Superior Técnico",
  entityRef: "https://tecnico.ulisboa.pt/en/about-tecnico",
  "Lisbon",
  "Portugal",
  datetime(year: 2007, month: 9, day: 1),
  datetime(year: 2014, month: 12, day: 1),
  duration: false,
)

#section[Professional Development]

#let dev(disp, u, date) = {
  linki(u, disp)
  h(1fr)
  period(dateStr(date))
  linebreak()
}

#let devs = (
  (
    "Tool to help my wife fill out reports at her work",
    "https://github.com/brunoroque06/reportus/tree/main",
    none,
  ),
  (
    "Advanced Software Architecture - Residuality Theory, Barry O'Reilly",
    "https://www.blacktulip.se/take-action",
    datetime(year: 2026, month: 1, day: 1),
  ),
  (
    "Secure Software Development, Compass Security",
    "https://eu.badgr.com/public/assertions/8cZszPGXQVetjEsOREII4A",
    datetime(year: 2025, month: 6, day: 1),
  ),
  (
    "Architecture Clinic, Michael Montgomery, IDesign",
    "https://www.idesign.net/Clinics/Architecture-Clinic",
    datetime(year: 2023, month: 9, day: 1),
  ),
  (
    "Architect's and Project Design Master Class, Juval Löwy, IDesign",
    "https://www.idesign.net/Training/Architect-Master-Class",
    datetime(year: 2021, month: 5, day: 1),
  ),
  (
    "Project Design Master Class, Juval Löwy, IDesign",
    "https://www.idesign.net/Training/Project-Design-Master-Class",
    datetime(year: 2020, month: 3, day: 1),
  ),
)

#for d in devs.slice(0, 5) {
  dev(..d)
}

#let languages() = {
  section[Languages]
  [English - Proficient (C)\
    German - Intermediate (B)\
    Portuguese - Native]
}

#let technologies() = {
  section[Technologies]

  let techsRow(techs) = {
    stack(dir: ltr, spacing: 1fr, ..techs.map(t => block(
      inset: 0.35em,
      stroke: 0.1em,
      t,
    )))
  }

  techsRow((".NET (C#)", "Python", "Angular", "PostgreSQL"))
  v(-0.6em)
  techsRow((
    linki("https://github.com/brunoroque06/dots", "Shell"),
    "Bazel",
    "Docker",
    "Azure",
    "Terraform",
  ))
}

#grid(
  columns: (45%, 55%),
  grid.cell(languages()),
  grid.cell(technologies()),
)
