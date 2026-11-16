import type { Post } from "./blog";

// One in-depth post per service that didn't have one yet, plus the site reinforcement checklist.
export const servicePosts: Post[] = [
  {
    slug: "bar-bending-reinforcement-checklist-before-concreting",
    title: "Bar Bending Checklist: 13 Site Checks Before Pouring Concrete",
    description:
      "A structural engineer's checklist for steel cutting, bending and fixing: drawings, BBS, cover, laps, stirrups, beam-column joints and the pre-concreting inspection.",
    date: "2026-11-17",
    image: "/img/blog/bar-bending-reinforcement-checks.webp",
    service: "structural-engineering",
    sections: [
      {
        heading: "Why reinforcement work deserves this much attention",
        body: [
          "Once concrete is poured, the steel inside it can never be seen again, let alone corrected. A column with the wrong bar diameter, a beam with stirrups spaced too far apart or a slab with no cover will look perfect from the outside, yet carry less load and corrode years earlier than designed. That is why, before any steel cutting, bending and fixing begins on a BBMC site, we insist that every bar-bending activity follows the approved structural drawings and the Bar Bending Schedule (BBS), with no exceptions.",
          "The checklist below is the one we give to site engineers, contractors and bar benders. Homeowners can use it too: you don't need to be an engineer to ask whether each point has been checked.",
        ],
      },
      {
        heading: "1. Verify the structural drawings",
        body: [
          "Start with the latest approved structural drawings, not an older revision printed months ago. Check the reinforcement details, bar diameters, spacing and position of every member before work starts. Revisions are common when the architectural plan changes, and working from a superseded drawing is one of the most frequent and most expensive mistakes on site.",
        ],
      },
      {
        heading: "2. Follow the Bar Bending Schedule (BBS)",
        body: [
          "The BBS lists every bar by its bar mark, with its cutting length, bending shape, hooks, bends and quantity. Cutting to the BBS rather than by eye keeps lengths accurate, reduces wastage and makes inspection straightforward: the engineer can compare what is fixed against a list rather than estimating.",
        ],
      },
      {
        heading: "3. Check steel quality",
        body: [
          "Use reinforcement steel of the specified grade (for example Fe500 or Fe500D) and diameter, from a reliable source with test certificates. Bars must be free of loose rust, oil, grease, mud and other contaminants that weaken the bond between steel and concrete. A light, tight film of surface rust is normal; flaking, pitted rust is not.",
        ],
      },
      {
        heading: "4. Cut and bend accurately, and cold",
        body: [
          "Cutting and bending should be done accurately with proper tools. Do not heat bars to bend them unless the structural engineer specifically permits it: heating can change the properties of modern high-strength steel and make it brittle at the bend.",
        ],
      },
      {
        heading: "5. Maintain bend dimensions",
        body: [
          "Bend diameters, hook lengths, development lengths and lap lengths must match the structural drawings and the applicable codes (IS 456 and, where specified, IS 13920 for ductile detailing). Bending a bar too tightly can crack it; a hook or development length that is too short means the bar can pull out before it reaches its strength.",
        ],
      },
      {
        heading: "6. Put laps only where they are allowed",
        body: [
          "Lap splices belong only at approved locations, usually away from points of maximum stress. Laps should be staggered rather than all bunched at the same section, unless the drawing specifically details otherwise. Concentrated laps create a weak plane and congest the concrete.",
        ],
      },
      {
        heading: "7. Maintain clear cover",
        body: [
          "Clear cover is the concrete between the steel and the outside face. It protects the steel from moisture and fire. Use proper cover blocks of the specified thickness for each member (footings, columns, beams and slabs each have their own value on the drawing), never pieces of stone, brick or wood. Too little cover is the most common reason for spalling and rust stains on Hyderabad buildings within a decade.",
        ],
      },
      {
        heading: "8. Keep bar spacing correct",
        body: [
          "Maintain the specified spacing between main bars, distribution bars, stirrups and ties. Spacing affects strength, but also whether concrete can flow between the bars and be compacted properly. Bars packed too closely leave honeycombing and voids.",
        ],
      },
      {
        heading: "9. Get stirrups and ties right",
        body: [
          "Stirrups and ties hold the main bars in place and confine the concrete. Check hook angles (135-degree hooks where the design calls for ductile detailing), anchorage, spacing and proper tying, especially near beam-column junctions and other critical zones where the drawing usually asks for closer spacing.",
        ],
      },
      {
        heading: "10. Give beam-column junctions special attention",
        body: [
          "The joint where beams meet a column is where forces change direction, and where reinforcement from several members crowds together. Check that bars are continuous and anchored, confinement reinforcement is provided through the joint, and congestion still leaves room for concrete to flow. If the steel physically cannot fit as drawn, stop and ask the structural engineer; do not improvise.",
        ],
      },
      {
        heading: "11. Tie and support everything firmly",
        body: [
          "All bars must be tied properly with binding wire and supported adequately, with chairs for top slab steel, so nothing shifts when concrete is poured and vibrated or when workers walk on the mesh. Top steel that gets pushed down during concreting loses most of its effect.",
        ],
      },
      {
        heading: "12. No unauthorised alterations",
        body: [
          "Do not cut, bend, shift, weld or otherwise modify any structural reinforcement without prior approval from the structural engineer. This includes cutting bars to make way for pipes or electrical conduits. Welding in particular can weaken bars and should never be done without the engineer's approval.",
        ],
      },
      {
        heading: "13. Inspect before every pour",
        body: [
          "Before concrete is poured, carry out a thorough reinforcement inspection and record it. Verify:",
        ],
        list: [
          "Bar diameter and number of bars in each member",
          "Spacing of main bars, distribution bars and stirrups",
          "Clear cover and cover blocks",
          "Lap locations and lap lengths",
          "Anchorage and development lengths",
          "Stirrup hooks and tying",
          "Overall placement, levels and alignment",
        ],
      },
      {
        heading: "When site conditions don't match the drawings",
        body: [
          "Any discrepancy between site conditions, the architectural drawings and the structural drawings must be brought to the structural engineer immediately. Do not proceed based on assumptions or verbal alterations. A ten-minute phone call or site visit before the pour costs nothing compared with breaking concrete afterwards.",
          "The aim of all of this is simple: structural safety, quality workmanship, dimensional accuracy and long-term durability. If you are building in Hyderabad or anywhere in Telangana and would like BBMC to verify your structural drawings and reinforcement details, or inspect the steel before a pour, share your drawings with us over WhatsApp or call our office.",
        ],
      },
    ],
  },
  {
    slug: "30x40-house-plan-hyderabad-guide",
    title: "Planning a 30x40 House in Hyderabad: Layout, Floors and Vaasthu",
    description:
      "How to get the most out of a 30x40 (1200 sq ft) plot in Hyderabad: setbacks, G+1 vs duplex, staircase and parking, Vaasthu by facing, and planning for future floors.",
    date: "2026-11-17",
    image: "/img/projects/minimalist-residential-building.webp",
    service: "architectural-design",
    sections: [
      {
        heading: "What a 30x40 plot really gives you",
        body: [
          "A 30x40 plot is 1,200 square feet, or about 133 square yards, one of the most common plot sizes in Hyderabad's residential layouts. But you can't build on all 1,200 square feet. Building rules require open setbacks on the front, sides and rear, and the size of those setbacks depends on the plot area, the road width in front and the height of the building. The footprint left after setbacks is what your architect actually has to plan with.",
          "That is why the first step is always to confirm the exact plot dimensions, road width and facing from your documents and a site survey, then work out the permissible footprint and number of floors before drawing a single room.",
        ],
      },
      {
        heading: "G+1, G+2 or duplex: choosing the format",
        body: ["Most 30x40 houses we design fall into one of these patterns:"],
        list: [
          "Duplex for one family: living, kitchen and a guest bedroom on the ground floor, two or three bedrooms upstairs, with an internal staircase.",
          "G+1 with one unit per floor: the owner lives on one floor and rents the other; an external or separate staircase keeps the units independent.",
          "Stilt + 2 or 3 floors: parking on the stilt level and one 2BHK per floor, a popular choice for rental income on wider roads.",
          "Ground floor for the family with provision for future floors, so the structure is designed for the final height from day one.",
        ],
      },
      {
        heading: "Staircase, parking and the things that are hard to move",
        body: [
          "On a compact plot, the staircase decides almost everything else. An internal staircase suits a single family; a staircase reachable from outside suits rental floors. Its position also matters for Vaasthu (generally south, west or south-west, and not the north-east).",
          "Decide early whether you need car parking inside the plot. A car needs roughly 2.5 m by 5 m of clear space plus room to turn in, which on a 30-foot frontage means planning the entrance and front setback around it.",
          "Fix the sump, borewell, septic tank or sewer connection and overhead tank positions at the planning stage too. They are expensive to relocate and each has a preferred Vaasthu zone.",
        ],
      },
      {
        heading: "Vaasthu by facing",
        body: [
          "A 30x40 plot can be planned well in any facing. East and north-facing plots are popular, but west and south-facing plots also produce excellent Vaasthu-compliant homes when the entrance pada, kitchen (south-east), master bedroom (south-west) and puja room (north-east) are placed carefully. The key is to plan Vaasthu together with light, ventilation and structure, not as an afterthought.",
        ],
      },
      {
        heading: "Light and ventilation on a narrow plot",
        body: [
          "With buildings close on both sides, cross-ventilation needs planning. Useful techniques include a duct or small courtyard in the middle of the plan, a double-height space over the living area in a duplex, windows on the front and rear, and a well-placed staircase with a skylight that pulls light into the centre of the house.",
        ],
      },
      {
        heading: "Planning for future floors",
        body: [
          "If you may add a floor later, tell your architect and structural engineer now. Columns, footings and the staircase should be designed for the final number of floors, even if you only build the ground floor today. Adding strength later is far costlier than designing for it upfront.",
        ],
      },
      {
        heading: "Drawings you should expect",
        body: ["A complete set for a 30x40 house typically includes:"],
        list: [
          "Floor plans with furniture layout",
          "Elevations and sections",
          "Vaasthu layout",
          "Structural drawings (footing, column, beam and slab details)",
          "Electrical and plumbing layouts",
          "Building permission drawings as per the local authority",
        ],
      },
      {
        heading: "Getting started",
        body: [
          "Share your plot document, the road width and a few photos of the site, and tell us how many family members will live there and whether you want rental income. BBMC can usually suggest two or three layout options for a 30x40 plot within a few days, with Vaasthu and structure built in.",
        ],
      },
    ],
  },
  {
    slug: "can-my-house-take-another-floor",
    title: "Can My House Take Another Floor? What a Structural Engineer Checks",
    description:
      "Before adding a floor to an existing house in Hyderabad, here is what a structural engineer checks: foundations, columns, cracks, concrete tests and strengthening options.",
    date: "2026-11-17",
    image: "/img/projects/mixed-use-commercial-building.webp",
    service: "structural-engineering",
    sections: [
      {
        heading: "Why you can't just build on top",
        body: [
          "Adding a floor is one of the most common requests we get from owners of older houses in Hyderabad, especially in established colonies where land is scarce. The temptation is to assume that if the house is standing, it can carry more. But every column, beam and footing was sized for a particular load. Add a floor and the load on the foundation and ground-floor columns can rise by half or more.",
          "A structural assessment answers one question clearly: can this building safely carry the extra floor, and if not, what does it need first?",
        ],
      },
      {
        heading: "Step 1: Find the original drawings",
        body: [
          "The best starting point is the original structural drawings, which show footing sizes, column sizes and reinforcement. Many older houses were built without proper structural drawings, or the drawings are lost. In that case the engineer has to establish the structure from site investigation.",
        ],
      },
      {
        heading: "Step 2: Inspect the existing structure",
        body: ["A site inspection looks at:"],
        list: [
          "Column sizes and spacing: small columns in older houses are often adequate for one floor but not more.",
          "Cracks in beams, slabs, columns and walls, and whether they are structural or just plaster shrinkage.",
          "Signs of settlement such as sloping floors, sticking doors or diagonal cracks near openings.",
          "Corrosion: rust stains, spalling concrete and exposed bars, often around bathrooms and the roof.",
          "Roof slab condition, leakage and the quality of past repairs.",
        ],
      },
      {
        heading: "Step 3: Check the foundation",
        body: [
          "The foundation is usually the deciding factor. A trial pit next to a footing shows its depth, size and condition, and the soil type it rests on. In parts of Hyderabad the ground is hard rock close to the surface; elsewhere there are softer soils or black cotton soil, which behave very differently under extra load.",
        ],
      },
      {
        heading: "Step 4: Test the concrete",
        body: [
          "Where the quality of the concrete is uncertain, non-destructive tests help. A rebound hammer test gives an indication of surface hardness, and an ultrasonic pulse velocity test indicates the uniformity of concrete inside a member. If needed, a small core can be cut and tested in a laboratory, and a cover meter can locate bars and measure cover without breaking anything.",
        ],
      },
      {
        heading: "Step 5: Analysis and the verdict",
        body: [
          "With the structure and material quality known, the engineer models the building with the proposed floor and checks every member. The answer is usually one of three:",
        ],
        list: [
          "Yes, the structure can take the additional floor as it is.",
          "Yes, after strengthening specific columns, beams or footings.",
          "Only a lighter floor is possible, for example a steel-framed structure with lightweight walls and roofing.",
        ],
      },
      {
        heading: "Common strengthening methods",
        body: [
          "If strengthening is needed, typical solutions are column jacketing (adding reinforcement and a concrete or steel jacket around existing columns), footing jacketing or additional footings, and beam strengthening. These are well-established techniques, but they must be designed by a structural engineer and executed carefully, usually one member at a time with proper propping.",
        ],
      },
      {
        heading: "Don't forget permission and Vaasthu",
        body: [
          "An additional floor also needs building permission from the local authority, and the extra height can change setback requirements. Plan the new floor's layout, staircase continuation and water tank position with Vaasthu in mind at the same time.",
          "BBMC carries out structural assessments for additional floors across Hyderabad and Telangana. Share photos and any old drawings over WhatsApp and we will tell you what the first visit should cover.",
        ],
      },
    ],
  },
  {
    slug: "interior-design-guide-new-flat",
    title: "Interiors for a New Flat: A Room-by-Room Planning Guide",
    description:
      "Planning interiors for a new 2BHK or 3BHK flat: the right order of work, kitchen layout, plywood grades and finishes, wardrobes, lighting and common mistakes to avoid.",
    date: "2026-11-17",
    image: "/img/interiors/modern-living-room.webp",
    service: "interior-design",
    sections: [
      {
        heading: "Start with the order of work",
        body: [
          "Most interior problems come from doing things in the wrong order. A sensible sequence for a new flat is: measure the flat accurately, finalise the furniture layout, mark electrical and plumbing points, then false ceiling, then carpentry and modular units, then painting, and finally lights, fittings and cleaning. Changing a switch position after the wardrobe is fixed, or a light point after the ceiling is finished, costs time and money.",
        ],
      },
      {
        heading: "Living and dining",
        body: [
          "Plan the TV wall and sofa position first, because they decide where power, data and lighting points go. Keep circulation paths clear (roughly 900 mm for a comfortable walkway), choose a dining table size that leaves room to pull chairs out, and consider a crockery unit or bar unit that doubles as a divider in open plans.",
        ],
      },
      {
        heading: "Kitchen",
        body: [
          "A good kitchen keeps the sink, hob and refrigerator within easy reach of each other, the classic work triangle, whether the layout is L-shaped, parallel or U-shaped. Plan the chimney position over the hob, a dedicated point for each appliance, and enough tall storage.",
          "Materials matter most here. For carcasses near water we recommend boiling-water-resistant (BWP) plywood rather than ordinary commercial ply. Countertops are commonly granite or quartz: granite is natural and very durable, while quartz offers more uniform colours with low maintenance. Shutters can be laminate (practical and economical), acrylic (high gloss) or PU paint (seamless, premium).",
        ],
      },
      {
        heading: "Bedrooms and wardrobes",
        body: [
          "Sliding wardrobes save space in smaller bedrooms; hinged shutters give full access and are easier to maintain. Plan the inside of the wardrobe too: hanging space, shelves, drawers and a loft for rarely used items. In the master bedroom, check bed direction and wardrobe placement for Vaasthu (heavy storage on the south or west walls is usually preferred).",
        ],
      },
      {
        heading: "Bathrooms and utility",
        body: [
          "Use water-resistant materials under the vanity, provide a mirror light and an exhaust fan, and keep a utility area for the washing machine with its own water inlet, drain and power point.",
        ],
      },
      {
        heading: "Lighting in layers",
        body: [
          "Good lighting uses three layers: general lighting (ceiling lights or downlights), task lighting (under-cabinet lights in the kitchen, reading lights by the bed) and accent lighting (cove lights, profile lights, picture lights). A false ceiling makes this easy, but it doesn't have to cover the whole flat; a cove in the living room and simple ceilings elsewhere often look better and cost less.",
        ],
      },
      {
        heading: "Mistakes we see often",
        body: [],
        list: [
          "Choosing finishes from small samples without seeing them in daylight in the actual room.",
          "Too few power points, especially near beds, the kitchen counter and the TV wall.",
          "Over-filling small rooms with furniture and dark finishes.",
          "Skipping 3D views and drawings, then discovering problems during execution.",
          "No written list of materials, brands and finishes in the quotation.",
        ],
      },
      {
        heading: "How long it takes",
        body: [
          "For a typical 2BHK or 3BHK, design takes a couple of weeks and execution usually six to ten weeks, depending on the scope and how quickly decisions are made. BBMC designs interiors for flats, villas, offices and cafes across Hyderabad, with 3D views before work starts and supervision through to handover.",
        ],
      },
    ],
  },
  {
    slug: "house-construction-stages-hyderabad",
    title: "House Construction Stages: From Soil Test to Handover",
    description:
      "Every stage of building an independent house in Hyderabad, from soil test and footings to slabs, curing, plastering and finishing, with the checks to insist on at each step.",
    date: "2026-11-17",
    image: "/img/projects/corporate-office-building.webp",
    service: "construction-renovation",
    sections: [
      {
        heading: "Before construction starts",
        body: [
          "Good construction starts on paper. Before the first excavation you should have approved building permission, a complete set of architectural and structural drawings, a soil investigation where the ground conditions are unknown, and a clear contract with the specification of every material. A realistic budget with a contingency of around 10 percent avoids stopping work halfway.",
        ],
      },
      {
        heading: "1. Site clearance and marking",
        body: [
          "The site is cleared and levelled, and the building is marked out from the drawings using reference lines. Marking errors at this stage shift the whole building, so check the centre-line marking against the drawings and the plot boundaries before excavation.",
        ],
      },
      {
        heading: "2. Excavation and foundation",
        body: [
          "Pits are excavated to the depth specified by the structural engineer, a layer of plain cement concrete (PCC) is laid, and footings are cast. Check the depth and soil at the bottom of every pit, and inspect footing reinforcement and cover before concreting.",
        ],
      },
      {
        heading: "3. Columns up to plinth and plinth beam",
        body: [
          "Columns rise to plinth level, followed by the plinth beam that ties them together. The area inside is backfilled in compacted layers, anti-termite treatment is done, and the floor base is laid. Poorly compacted filling is a common cause of floor cracks later.",
        ],
      },
      {
        heading: "4. Superstructure: columns, beams and slabs",
        body: [
          "Each floor involves columns, then beam and slab formwork, reinforcement, inspection and concreting. Concrete needs proper curing to gain strength: as per IS 456, exposed surfaces should be kept continuously wet for at least 7 days for ordinary Portland cement, and longer for blended cements or in hot, dry weather. Props under slabs must stay in place for the period the engineer specifies, which depends on the span.",
        ],
      },
      {
        heading: "5. Masonry",
        body: [
          "Walls are built with bricks, fly-ash bricks or AAC blocks. Check that walls are in line and plumb, joints are filled, and lintels are cast over openings. Soak clay bricks before use; AAC blocks need their own adhesive or mortar as specified.",
        ],
      },
      {
        heading: "6. Electrical and plumbing first fix",
        body: [
          "Conduits and pipes are laid in walls and slabs before plastering. This is the time to confirm every switch, socket and water point against the furniture layout. Pressure-test water lines before they are covered.",
        ],
      },
      {
        heading: "7. Plastering and waterproofing",
        body: [
          "Internal and external plastering follow, with curing. Waterproofing of the roof, bathrooms, balconies and the sump is critical and should be done with a proven system and tested by ponding water before tiles are laid.",
        ],
      },
      {
        heading: "8. Flooring, doors, windows and finishing",
        body: [
          "Flooring and tiling, door and window frames and shutters, painting, electrical and sanitary fittings complete the house. Check tile levels and joints, slopes towards drains in wet areas, and that doors and windows close properly.",
        ],
      },
      {
        heading: "9. Handover",
        body: [
          "Before handover, walk through with a snag list, test every electrical point and tap, and collect the as-built drawings, warranties and material bills. These help with future maintenance and any extension.",
        ],
      },
      {
        heading: "Renovating instead of rebuilding?",
        body: [
          "If you are renovating an older house, start with a structural check, especially before removing walls or adding load. BBMC handles construction and renovation across Hyderabad with our own design, structural and Vaasthu team, so decisions on site are made quickly and by people who know the drawings.",
        ],
      },
    ],
  },
  {
    slug: "joint-development-agreement-landowners-hyderabad",
    title: "Joint Development Agreements for Landowners: What to Check",
    description:
      "A plain guide for Hyderabad landowners considering a joint development agreement with a builder: sharing ratios, key clauses, approvals, RERA and tax points to discuss.",
    date: "2026-11-17",
    image: "/img/projects/designer-apartment-complex.webp",
    service: "builders-developers",
    sections: [
      {
        heading: "What a joint development agreement is",
        body: [
          "In a joint development agreement (JDA), a landowner contributes the land and a developer contributes the construction, approvals and marketing. Instead of selling the land, the owner receives an agreed share of the finished building: flats, built-up area or sometimes revenue. It is a popular way for families in Hyderabad to turn an old house or a plot into apartments without investing their own money in construction.",
        ],
      },
      {
        heading: "How the share is decided",
        body: [
          "The sharing ratio between landowner and developer is negotiated for each project. It depends on the land value and location, the road width (which affects how many floors are allowed), the type of project and who pays for what. Ratios vary widely across the city, so get advice and compare more than one proposal rather than accepting the first figure offered.",
          "Agree clearly which flats or which floors go to the owner, their facing and position in the building, and how car parking is shared. The best flats and the worst flats should not all land on one side.",
        ],
      },
      {
        heading: "Clauses that protect the landowner",
        body: ["A strong JDA usually covers:"],
        list: [
          "A completion timeline with a penalty or compensation for delay.",
          "A detailed specification annexure: structure, flooring, doors, fittings, lifts, generator and so on, by brand where possible.",
          "Who obtains and pays for building permission, other approvals and utility connections.",
          "Any refundable security deposit (goodwill advance) paid to the owner and when it is returned.",
          "The scope of any power of attorney given to the developer, ideally limited to the developer's share.",
          "What happens if the developer abandons the project.",
          "Rent or temporary accommodation if the owner's existing house is demolished.",
        ],
      },
      {
        heading: "Approvals and RERA",
        body: [
          "The developer normally obtains building permission in coordination with the owner. Projects above the thresholds in the Real Estate (Regulation and Development) Act, broadly where the land exceeds 500 square metres or the project has more than eight apartments, must be registered with Telangana RERA before flats are advertised or sold. Ask for the RERA registration number.",
        ],
      },
      {
        heading: "Tax: talk to your CA early",
        body: [
          "A JDA has income tax implications for the landowner, including capital gains on the land transferred and GST considerations on the development. The rules on when tax becomes payable are specific, so discuss the structure with a chartered accountant before signing, not after.",
        ],
      },
      {
        heading: "Check the developer, not just the offer",
        body: [
          "Visit the developer's completed buildings, speak to people living there, and look at how long their past projects took. The quality of construction will stay with you and your tenants for decades.",
        ],
      },
      {
        heading: "How BBMC can help",
        body: [
          "BBMC works as builders and developers, and also as independent architects and engineers. Landowners come to us to evaluate how many floors and flats their plot can support, to review a developer's drawings and specifications, or to develop the property with us directly. Call or WhatsApp us with your plot details for an initial discussion.",
        ],
      },
    ],
  },
  {
    slug: "plot-buying-checklist-hyderabad-survey-documents",
    title: "Before You Buy a Plot in Hyderabad: Survey and Document Checklist",
    description:
      "What to check before buying a plot in Hyderabad: a physical survey, boundaries, road width, lake buffer zones, layout approval, link documents, EC and Bhu Bharati records.",
    date: "2026-11-17",
    image: "/img/blog/plot-survey-checklist.webp",
    service: "land-surveying-plot-development",
    sections: [
      {
        heading: "Why a survey comes first",
        body: [
          "Many plot disputes in Hyderabad start with a simple gap: the land on the ground does not match the land on paper. A physical survey before purchase measures the plot, fixes its boundaries and compares them with the documents and layout plan. It costs very little compared with the price of the plot and can save years of trouble.",
        ],
      },
      {
        heading: "What the survey should check",
        body: [],
        list: [
          "Actual dimensions and area compared with the sale deed and layout plan.",
          "Boundary stones and whether neighbours have encroached, or the plot encroaches on them.",
          "Road width in front, which affects permissible floors and setbacks.",
          "Ground levels and slope, including whether the plot is below road level and will collect water.",
          "Nearby nalas, drains, high-tension power lines and other features that restrict building.",
          "Whether the plot falls in or near the full tank level (FTL) or buffer zone of a lake, which can make it unbuildable.",
        ],
      },
      {
        heading: "Documents to verify",
        body: [
          "Have a property lawyer verify the title. The usual set for an urban plot includes:",
        ],
        list: [
          "Sale deed of the seller and the chain of link documents going back several decades.",
          "Encumbrance certificate (EC) for the same period, showing there are no mortgages or other charges.",
          "Layout approval from the relevant authority (GHMC, HMDA or DTCP) and the approved layout copy showing your plot number.",
          "LRS (layout regularisation) proceedings, if the layout was unapproved and later regularised.",
          "Property tax receipts and mutation in the seller's name where applicable.",
          "For agricultural land or land converted from it, the record of rights and pahani on Telangana's Bhu Bharati portal, which replaced Dharani in April 2025.",
        ],
      },
      {
        heading: "Check the plot's planning status",
        body: [
          "Find out the land use zone in the master plan, whether any road widening is proposed in front, and whether the plot is in a lake buffer or restricted area. These details decide what you can build, and in some cases whether you can build at all.",
        ],
      },
      {
        heading: "Vaasthu before you pay",
        body: [
          "If Vaasthu matters to you, check it before buying: facing, shape (square and rectangular are easiest), road positions, slope and surroundings. A plot with an awkward shape or a road hitting it directly can often be corrected in planning, but it is better to know beforehand.",
        ],
      },
      {
        heading: "Developing a larger piece of land",
        body: [
          "For larger land parcels, the survey becomes the base for layout planning: dividing land into plots, roads and open spaces as per the rules, and preparing drawings for layout approval. BBMC carries out land surveys, boundary marking, plot Vaasthu checks and layout planning across Hyderabad and Telangana.",
        ],
      },
    ],
  },
  {
    slug: "front-elevation-design-materials-hyderabad",
    title: "Front Elevation Design: Ideas and Materials That Last in Hyderabad",
    description:
      "How to design a house front elevation that looks good for years: orientation, shading, cladding, paint, ACP/HPL, glass, lighting and maintenance in Hyderabad's climate.",
    date: "2026-11-17",
    image: "/img/projects/contemporary-luxury-villa.webp",
    service: "building-elevation-design",
    sections: [
      {
        heading: "Design the elevation with the plan, not after it",
        body: [
          "The front elevation is the first thing anyone sees of your house, but it works best when it grows out of the plan rather than being stuck on at the end. Projections, balconies, sunshades and planters need structural provision, and window positions decide the rhythm of the facade. Planning them together avoids expensive changes and fake features that age badly.",
        ],
      },
      {
        heading: "Respond to sun and rain",
        body: [
          "Hyderabad's strong sun, especially on west and south facades, and heavy monsoon showers are hard on exteriors. Deep sunshades (chajjas), vertical fins, louvers and jaali screens cut heat and glare while adding depth to the design. A west-facing glass wall with no shading looks striking in a 3D render and becomes an oven in May.",
        ],
      },
      {
        heading: "Materials and how they behave",
        body: [],
        list: [
          "Exterior emulsion and texture paint: economical and flexible; choose a good exterior-grade system and plan for repainting every few years.",
          "Natural stone cladding (granite, sandstone, slate): durable and rich-looking; larger or heavier stones at height should be fixed mechanically with clamps, not just with adhesive.",
          "HPL (high-pressure laminate) and ACP (aluminium composite) panels: clean, modern lines; for ACP insist on fire-retardant (FR) grade panels.",
          "Wood-look options such as WPC or aluminium louvers: the warmth of wood without the maintenance of real timber outdoors.",
          "Glass with UPVC or aluminium frames: brings in light; use it where shading is possible and specify suitable glass for heat.",
          "Exposed brick or brick-look tiles: textured and long-lasting with proper sealing.",
        ],
      },
      {
        heading: "Keep it balanced",
        body: [
          "The most elegant elevations usually use two or three materials, not six. Combine a main wall finish with one accent material and one feature element such as a jaali, a framed balcony or a vertical fin. Grooves in plaster, a strong parapet line and well-proportioned windows do a lot of work at very little cost.",
        ],
      },
      {
        heading: "Lighting and details",
        body: [
          "Plan exterior lighting at the design stage: wall washers for textured surfaces, uplights on columns, and soft lighting at the entrance and name board. Hide conduits, drain pipes and AC outdoor units in planned ducts or behind screens so they don't spoil the facade.",
        ],
      },
      {
        heading: "Think about maintenance",
        body: [
          "Ask how each surface will be cleaned and maintained. Light colours on west walls stay cooler; very light colours near the ground stain quickly in the monsoon. Provide drip moulds above windows and copings on parapets so rainwater doesn't streak the walls.",
        ],
      },
      {
        heading: "See it before you build it",
        body: [
          "A 3D elevation lets you compare options, colours and materials before committing. BBMC designs 3D front elevations for independent houses, villas, apartments and commercial buildings across Hyderabad, together with the structural details needed to build them properly.",
        ],
      },
    ],
  },
];
