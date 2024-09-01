import Contact from "@/components/Contact"

const DeveloperName = process.env.DEVELOPER_NAME
const DeveloperEmail = process.env.DEVELOPER_EMAIL
const DeveloperPhone = process.env.DEVELOPER_PHONE
const DeveloperAddress = process.env.DEVELOPER_ADDRESS
const LinkdinUrl = process.env.LINKDIN_ADDRESS
const InstagramUrl = process.env.INSTAGRAM_ADDRESS

const DeveloperData = {
  DeveloperName,
  DeveloperEmail,
  DeveloperPhone,
  DeveloperAddress,
  LinkdinUrl,
  InstagramUrl
}

const ContactUsRoute = () => {
  return (
    <div>
      <Contact data={DeveloperData} />
    </div>
  )
}

export default ContactUsRoute