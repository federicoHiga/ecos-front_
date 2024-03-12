import "./styles.css";
import { Button, useTheme } from "@mui/material";

const CategoriesGrid = () => {
  const theme = useTheme();

  return (
    <div className="categories-section">
      <h6>Red de Proveedores ECO</h6>
      <h3>Categorías</h3>
      <section className="categories-grid">
        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/9a2e/c257/ea116b63713182dbccefa6e6437f4488?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jbKrECz1LS3y0yxNc3HBVBli-CznU65Z7o~ED5vHf80OF~rHuliOnzVoHJ1RUOgolOBhS9A4gsxrfLqgO1wuwbyrfZEENsHJoYSzQe4E1hbb88II8LhehmiVpRRHyrps8x1onJksJaQbnqJtgvx~3WcOdtioLGp53N-HOk4qCOosx9IYfTRmlff9L6OrO4YXGCvcCAhd1Y9qDReSBIz0cUH2Wi1DZsGtPzZLbwG30lfP2Ry2K6V-6TfGk-8HFdlbAH-Be7y3rgdGxdZ9YsmYYDv~3Dq19P3qgIgjaLhY0rgyABZyF9uulNxj81qEJyzlOXl~2JQ~P3E388iTAZeYMg__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Construcción
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/31e6/02f3/5dc2a39d6d7b5d643922035a711b5f6a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R20zHPYZIaPMW6BSYvFiIfWNPuj2AavqFZppA3a1fVSf6RtrHJQ3Bz-TpOna8LMvTFYrdH7W6KnC0QNaOAvrD1gv9cre3QFyztVU7FhNuQjU~u0cfz8ixAc99kXb-U1C66cxhq4S~DVcf6D2O9Uyd2au6LRniUdiYT8x4M2JURbe7ACs~vx7bEzRdGO5lZMpri8tA2wzq11MLv20Jpb0rZQvhQV0eO6xOS7Ltl92-prBGYBilTDx4UdnTD-efC9w7mPsiiB4CxStAxnyj-xYUcNWtg11RN8B8g5ywWhYLYb2PEc8KlahpheFDekfiNcOhHiAuPwhHhBn6DysM724Tg__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Tecnología
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/5c45/3019/38b7af738e4a0f0ed80d2c456161a2e8?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWfBgDTLtLCMTYk0jppgFYlNLQDDQJXbArHWigp1oK~G6ON9BeHUpsHQhFhvGFGjYo1Lz6gD5pXzGNhx3xAHd2~f43-JWjhcDV3MZZcCRCFYPbHMETkuyk~hwYo~lVrNpp9YyiTMeBoaShqhh3a48oFf0BhRkmLcLAl7Rg8cleEoYvqwP91AiR1aGpxSCGuH7t1W8i3d0RAD63AQMwtm-txp3iWAxT-UK~yjGYOGTfbMuaFPjzqriSRPea5HsqSY64wnID04Vtkw~kn6gmxoCVOUI92LxKxzIK38ZxHC6tjXJmuRzF9r~VynfuwY1efqbo5bedAkhJ2zhJUvgAm3EQ__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Indumentaria
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/4856/2d94/4caf9ee29f7247dfd42c27b90c6e54d0?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZXTk09s1ONTyHdNjZMa6fJACkVGG~dYYJT1c9Z0upjjksOu4UQecF2rQwv212vqs5kdzrwdmLwinX7zhJkJKEhBsc~Dphaqi~UKFGlh07ngqIQ9~3QrOz~SgJbsm6J2rmpAA--rDqVnUAJBsinqD-11-mgbG921IPUKdHkVojdFHohb9A~sdAnEMHWsbKsWHV6RIYroiSijTBrqKHPam7W2lZU4RqVPO7A4teGMhDqWQ6GKB3OVOn5RBSH-wwPOfRtDF1bcEow7JbLkC5vFYGYbIq5bLmdCjpFCVV3i70Ag-FbHbn84dYCpQyT1~KuDEgxI6Jp4d2GyZPcD4k0ALg__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Bienestar
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/8ae9/3911/c95444ee73e93011ba436e46d70695b7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YD~N0sacScjJmKpm2MzGlZcoK5v5UHBkjhUInpWaoD7eDZdCeJGotVh4JEl~cThEzTqEaPL7ksxXqRpVyFrrHXs03t~Ug2ZjuFaKwbG2Feib4vdxOay-J9SNBMdhHisNqVmxb8lJf5UQugQZ0aCprgEhdU-7BhdzmbeoOcxInGrL7BrrYoIwcQZ3hsgr9VmmpNbqyGlEHfngSmFmqlowuYB~V1dngP0xkHdazJqi6qB6ibxTxojuvjnJqTVyLDGJo4-XIpJGu7k675y9cTXv5mvVeEkm6XgrnWky9ZqejF6e1YGr8Vfq4onmGoF5CD8ywvzARQWjSZwHx9zqaMivhQ__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Gastronomía
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/2fff/625a/6e9d8da514da4d4163554438c1ac5a42?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yg7VPL1mIuB7v0KSdcY-pTNDj0UXXY9~S9IEydTnNsF0RiKlgEoF8~GGoHWsPO58OwYxh2dPYyWr4cB1XIjSFcyiUUyQ8AARTWs77xbwPdGPJticNMZh7TYDfNN5qtzqpmR5npPJL~TFPHZqbsr-zEOzIWIhBcWVFdE8dmg8E4wzyXQfG8zU1TMd-Dv0azIvzTpWog5DG31LcXErx4AzaHvJvSAKmElWWe5nNCDrham0ANBHUE3-pZwwX34UTWcFMKE5dsOAkzcdULWB7Mj8JdJV-IHaHyeV58Z6hcnACYRA52AMB9ydNdgxouhWkhcq72CdAazhEPOKsVBEZFeALg__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Cultivos
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/a8c0/578b/fcce568d7ac6544ea205db30627371e1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XrUizi1OzZ0Xl9IW3ktBxjZFBLCHEUQH6CtZQvBv4c-PE5Csouve1FLbz63tcgjBu1m9tz9kV85OjfPLFjxxue-h4BAmS13b3lq6bjgtWDpEab5vbtxNolfSRxapGksrmriVpySv~bp~yLcB8l-C8b6gQGL-bpAb9hsC7oLwJsqbdOPK9Ij4WV-7OMq-OmEA9si4QjFZ9RYEW8p73~7--jGVKOcLboNTTkiTs54r2C~mH9FJAsn8WJ8lzpFCtNNMXtMEhQ7WMUk2xnwBskLH80zzzOeHI9100ONSpJIrWoodGgvPjXVNlsDtknJmoheupbJdBGOk3kr7A0bzGkwR7g__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Transporte
            </h6>
          </div>
        </Button>

        <Button variant="categories" className="categories-grid-button">
          <div className="button-inner-wrapper">
            <section className="grid-item-icon-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/9d60/84fe/608fad7ef2b35963ddc4684c9a475270?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~URsixnPlZsNThxU3MzCuvZ-45nOp-CXRnJuFqueGnIQq1mdOPVeKmbqBeoiOYxFkrFuUdpy674QGK6NkD9F2UhkFFBuMVx3prS5BLbPfQox36nkszlY9BnS3aL1nK0IC93A~V~PaKvxkO4aMSarmH12nzfGxx~WQPlncZqsibzeGMN12q-icjDbTYy1aRgU19GHSiCoVEEIdO8bACA46xPtDwn7ZLWbRFVmMW-7Yuat~L8ATVahQuxODxv5VQ8bY7Wo2R~fC0ytyl5VZVghJQqwOLUxX77Gup7JFcqfMP0mdiZMMAFlfa0m~B8Tr5DnX8x1WJxKVTgpwT2xyUbkA__"
                alt=""
              />
            </section>
            <h6 className="grid-item-title" style={{ color: theme.palette.negro.main }}>
              Reciclaje
            </h6>
          </div>
        </Button>
      </section>
      <section>
        {/* <button className="categories-section-button">
          <p>Ver más categorías</p>
        </button> */}
        <Button variant="purple" sx={{ padding: "10px 24px" }}>
          Ver más categorías
        </Button>
      </section>
    </div>
  );
};

export default CategoriesGrid;
