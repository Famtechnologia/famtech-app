
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID

export async function subscribeToNewsletter({ email, firstName, lastName }) {
  try {
    const response = await fetch(
      'https://connect.mailerlite.com/api/subscribers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${MAILERLITE_API_KEY}`
        },
        body: JSON.stringify({
          email,
          fields: {
            name: firstName,
            last_name: lastName
          },
          groups: [ MAILERLITE_GROUP_ID ]
        })
      }
    );

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed',
        subscriberId: data.data.id
      };
    } else {
      return {
        success: false,
        message: data.message || 'Subscription failed'
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Subscription error',
      error: error.message
    };
  }
}
