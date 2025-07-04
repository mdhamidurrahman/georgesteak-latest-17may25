export default function GoogleMapReact() {
  return (
    <section className="gMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.9856666429228!2d-73.66052808813075!3d41.00368691958763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c297f6ecfce3e5%3A0xb675fae638cc0026!2sGeorge%20Italian%20Seafood%20%26%20Steakhouse!5e0!3m2!1sen!2s!4v1726036425734!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{
          border: 0,
        }}
        // allowFullScreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
