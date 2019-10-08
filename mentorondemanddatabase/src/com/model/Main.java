package com.model;

import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.classic.Session;

public class Main {
	
	public static void main(String[] args) {
		
		
		
		Users u = new Users("icru@gmail.com","pass","icru","s", 9876542323L,"user",null, true);
		Users ua = new Users("admin@mod.com","admin","admin","s", 9876542323L,"admin",null, true);
		Users u1 = new Users("aswinvijayakumar00@gmail.com","password","Aswin","Vijay", 9876542323L,"mentor",null, true);
		Users u2 = new Users("aswinvijayakumar@gmail.com","password","Aswin","Vijayakumar", 9876542323L,"mentor",2f, true);
		Trainings t = new Trainings("started", 30, 4.2F,20000F, 1L,101L,20000F,"java");
		Trainings t1 = new Trainings("completed", 100, 4.2F,20000F, 1L,2L,20000F,"Java");
		Technology th = new Technology("Java","basics,project","1mth","basic programming",20000f);
		Technology th1 = new Technology("Spring","basics,project","2mth","basic programming",25000f);
		Technology th2 = new Technology("Bootstrap","basics,project","3weeks","basic programming",10000f);
		Payment p = new Payment("paid", "java", 20000F, 5000F,15000F, 1L,101L);
		
		Skills s1 = new Skills("java", 3L, "4pm-6pm",4.2F);
		Skills s2  = new Skills("spring",3L,"6pm-8pm",4.8F);
		Payment p1 = new Payment("paid", "java", 20000F, 20000F,0F, 1L,101L);
		Course c = new Course("java", 2L,4.2f,"4pm-6pm");
		
	
		t.setPayment(p);
		t1.setPayment(p1);
	
	
		Configuration  cfg = new Configuration();
		cfg.configure("mentor.cfg.xml");
		SessionFactory sf = cfg.buildSessionFactory();
		Session s = sf.openSession();
		Transaction ts = s.getTransaction();
		
		ts.begin();
		
	
		

		//s.save(u);
		//s.save(t);
		//s.save(th);
		//s.save(ua);
		//s.save(u2);
		//s.save(u1);
//		s.save(th1);
//		s.save(th2);
		//s.save(t1);
		//s.save(c);
		s.save(s1);
		s.save(s2);
		
		ts.commit();
		s.close();
		sf.close();
		System.out.println("Success");
		
	}

}
