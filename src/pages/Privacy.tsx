import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy - Arxcess Mobile Apps</title>
        <meta name="description" content="Privacy Policy for Arxcess Banking mobile applications - how we collect, use and protect your data." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto dark:prose-invert">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Privacy Policy of Arxcess Mobile Apps
          </h1>
          
          <p className="text-muted-foreground mb-6">
            <strong>Effective date: 01/01/2020</strong>
          </p>
          
          <p className="text-foreground mb-8">
            This Privacy Policy describes the information collected by Arxcess Software ltd through our mobile applications 
            Arxcess Banking Customers, Arxcess Banking Officer & Arxcess Banking WorkShop and how we use that information.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data We Collect</h2>
            <p className="text-foreground mb-4">
              We collect information to provide a better experience for all our users. The types of information we collect 
              depends on how you use our app:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Device Information:</h3>
                <p className="text-foreground">
                  We collect specific device information such as the hardware model, operating system version, 
                  unique device identifiers, and mobile network information.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">Usage Data:</h3>
                <p className="text-foreground">
                  We collect data about your interactions with our services, which includes the date and time of your visit, 
                  the features you use, and your app preferences.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">User Content:</h3>
                <p className="text-foreground">
                  We collect the content you create, upload, or receive from others when using our service.
                </p>
              </div>
            </div>
            
            <p className="text-foreground mt-4">
              Please note that we do not share your personal data with any third parties unless explicitly mentioned in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Data</h2>
            <p className="text-foreground">
              We use the information we collect to provide, maintain, protect, and improve our services. We also use this 
              information to offer you tailored content like giving you more relevant app features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-foreground">
              We are committed to protecting our users' data. We implement a variety of security measures to help keep your 
              information secure, such as encryption. We also review our information collection, storage, and processing 
              practices regularly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Deletion</h2>
            <p className="text-foreground">
              We retain your data for as long as you use the app and for a reasonable period afterward, or as necessary to 
              comply with our legal obligations. If you choose to delete Arxcess Banking Customers, Arxcess Banking Officer 
              & Arxcess Banking WorkShop, or deactivate your account, we will permanently delete all your data from our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-foreground">
              We may update our Privacy Policy from time to time. Whenever we make a change, we will post the updated policy 
              on this page with a new effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@arxcess.com" className="text-primary hover:underline">
                info@arxcess.com
              </a>
            </p>
            
            <p className="text-foreground">
              By using Arxcess Banking Customers, Arxcess Banking Officer & Arxcess Banking WorkShop, you consent to our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-foreground mb-4">
              This Privacy Policy is effective as of 01/01/2020. If we change our privacy policies and procedures, we will 
              post those changes on this page. If we make any changes to this Privacy Policy that materially change how we 
              handle your personal data, we will endeavor to provide you with reasonable notice before such changes take effect.
            </p>
            
            <p className="text-foreground mb-4">
              Please check this page periodically for updates. Your continued use of the Arxcess Banking Customers, 
              Arxcess Banking Officer & Arxcess Banking WorkShop App following the posting of changes to this policy will 
              mean you accept those changes.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <div className="text-foreground">
              <h3 className="text-lg font-medium mb-2">Arxcess</h3>
              <p>Uganda, Kampala, Makerere Kikoni B</p>
              <p>
                <a href="mailto:info@arxcess.com" className="text-primary hover:underline">
                  info@arxcess.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;