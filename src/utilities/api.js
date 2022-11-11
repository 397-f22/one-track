// This will be called when first creating a package
export async function addNewPackage(trackingNumber, slug) {
    const data = {"tracking": {
        "tracking_number": trackingNumber,
        "slug": slug
    }}
    const response = await fetch(`https://api.aftership.com/v4/trackings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'as-api-key': 'asat_a35d4410724145ac886d9ecdaae30bd5'
      },
      body: JSON.stringify(data)
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


export async function lastCheckpoint(trackerId) {
    const response = await fetch(`https://api.aftership.com/v4/last_checkpoint/${trackerId}`, {
      headers: {
        'as-api-key': 'asat_a35d4410724145ac886d9ecdaae30bd5'
      },
    });
    return await response.json();
}