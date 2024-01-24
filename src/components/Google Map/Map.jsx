
import React from 'react'

function Map() {
  return (
    <>
      <iframe
        title="Google Map"
        width="100%"
        height="500px"
        frameBorder={1}
        style={{ border: 1 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.81457051028121!2d85.34443030619043!3d27.685370961142297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198d99470043%3A0x167d008efb47d64c!2z4KS14KWN4KSw4KWL4KSh4KS14KWHIOCkh-CkqOCljeCkq-Cli-CkuOCkv-CkuA!5e0!3m2!1sne!2snp!4v1705940112904!5m2!1sne!2snp"
        allowFullScreen
      ></iframe>
    </>
  )
}

export default Map

