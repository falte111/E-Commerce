package Email;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class DataJpaApplication {
	@Autowired
	 private EmailService senderService;

	public static void main(String[] args) {
		SpringApplication.run(DataJpaApplication.class, args);
	}
	 @EventListener(ApplicationReadyEvent.class)
	 public void sendMail(){

	  senderService.sendEmail("qrkwangw@gmail.com","nimama","oh yeah baby");
	 }
}
