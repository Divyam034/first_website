from django.test import TestCase
from django.urls import reverse

class GallerySmokeTests(TestCase):
    def test_gallery_url(self):
        resp = self.client.get(reverse('gallery'))
        self.assertIn(resp.status_code, (200, 302))
